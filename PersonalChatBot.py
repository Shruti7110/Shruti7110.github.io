from dotenv import load_dotenv
from openai import OpenAI
from pypdf import PdfReader
from pydantic import BaseModel
import json
import sys
import os

# Global variables
gemini = None
model_name = None
linkedin = ""
name = ""
summary = ""
email = ""
system_prompt = ""
evaluator_system_prompt = ""


def gemini_setup():
    global gemini, model_name
    load_dotenv(override=True)
    gemini = OpenAI(
        api_key=os.getenv("GOOGLE_API_KEY"),
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/")
    model_name = "gemini-2.0-flash"
    print("Gemini setup complete", file=sys.stderr)


def add_personal_details():
    global linkedin, name, summary, email
    try:
        reader = PdfReader("me/linkedin.pdf")
        linkedin = ""
        for page in reader.pages:
            text = page.extract_text()
            if text:
                linkedin += text
    except Exception as e:
        print(f"Error reading LinkedIn PDF: {e}", file=sys.stderr)
        linkedin = "LinkedIn profile content not available."
    name = "Shruti"
    email = "shruti.pawar0713@gmail.com"

    try:
        with open("me/summary.txt", "r", encoding="utf-8") as f:
            summary = f.read()
    except Exception as e:
        print(f"Error reading summary: {e}", file=sys.stderr)
        summary = "Summary not available."

    print("Personal details added", file=sys.stderr)


def defining_prompts():
    global system_prompt, evaluator_system_prompt
    system_prompt = f"""
    You are {name}'s AI assistant. You are helping visitors on her personal portfolio website learn about her background, skills, experience, and showcased projects.

    You are given her summary and LinkedIn profile as reference material.

    Always refer to {name} as "she", "her", or by her name when discussing her work and experience.

    ## Behavior Rules:
    - Use simple formatting - avoid markdown symbols like *, **, etc. Use clear line breaks and simple bullet points with - if needed.
    - Answer questions directly without greeting repeatedly (the initial greeting is already provided).
    - When they ask about her skills, projects, or experience → speak confidently about her work using "she has experience with", "her projects include", etc.
    - Match the topic of the question to her related work. For example, if they ask about computer vision, highlight her CV-related experience.
    - If they express interest in collaborating or hiring → express enthusiasm and ask them to contact her at {email}.
    - If something isn't covered in her summary or LinkedIn, say: "That's a great question. I don't have that specific information readily available. Please reach out to her directly at {email} and she can provide more details."
    - Be conversational but concise. Keep it professional and approachable.
    - Do NOT invent any details that are not in the provided summary or LinkedIn content.
    - Format responses with proper spacing and line breaks for readability.
    - If they ask about working together, express enthusiasm and direct them to contact her at {email}.

    ## Summary:
    {summary}

    ## LinkedIn Profile:
    {linkedin}

    With this context, please chat with the visitor as {name}'s assistant, ready to share insights into her freelance work, skills, and projects.
    """

    evaluator_system_prompt = f"You are an evaluator that decides whether a response to a question is acceptable. \
    You are provided with a conversation between a User and an Agent. Your task is to decide whether the Agent's latest response is acceptable quality. \
    The Agent is playing the role of {name} and is representing {name} on their website. \
    The Agent has been instructed to be professional and engaging, as if talking to a potential client or future employer who came across the website. \
    The Agent has been provided with context on {name} in the form of their summary and LinkedIn details. Here's the information:"

    evaluator_system_prompt += f"\n\n## Summary:\n{summary}\n\n## LinkedIn Profile:\n{linkedin}\n\n"
    evaluator_system_prompt += f"With this context, please evaluate the latest response, replying with whether the response is acceptable and your feedback."

    print("Prompts added", file=sys.stderr)


class Evaluation(BaseModel):
    is_acceptable: bool
    feedback: str


def evaluator_user_prompt(reply, message, history):
    user_prompt = f"Here's the conversation between the User and the Agent: \n\n{history}\n\n"
    user_prompt += f"Here's the latest message from the User: \n\n{message}\n\n"
    user_prompt += f"Here's the latest response from the Agent: \n\n{reply}\n\n"
    user_prompt += "Please evaluate the response, replying with whether it is acceptable and your feedback."
    return user_prompt


def rerun(reply, message, history, feedback):
    updated_system_prompt = system_prompt + "\n\n## Previous answer rejected\nYou just tried to reply, but the quality control rejected your reply\n"
    updated_system_prompt += f"## Your attempted answer:\n{reply}\n\n"
    updated_system_prompt += f"## Reason for rejection:\n{feedback}\n\n"
    messages = [{
        "role": "system",
        "content": updated_system_prompt
    }] + history + [{
        "role": "user",
        "content": message
    }]
    response = gemini.chat.completions.create(model=model_name,
                                              messages=messages)
    return response.choices[0].message.content


def evaluate(reply, message, history) -> Evaluation:
    try:
        messages = [{
            "role": "system",
            "content": evaluator_system_prompt
        }] + [{
            "role": "user",
            "content": evaluator_user_prompt(reply, message, history)
        }]
        response = gemini.beta.chat.completions.parse(
            model="gemini-2.0-flash",
            messages=messages,
            response_format=Evaluation)
        parsed = response.choices[0].message.parsed
        if parsed is None:
            raise ValueError("Failed to parse evaluation response")
        return parsed
    except Exception as e:
        print(f"Evaluation error: {e}", file=sys.stderr)
        # Return acceptable by default if evaluation fails
        return Evaluation(is_acceptable=True,
                          feedback="Evaluation service unavailable")


def chat(message, history):
    try:
        print(f"Processing message: {message[:50]}...", file=sys.stderr)

        if "patent" in message:
            system = system_prompt + "\n\nEverything in your reply needs to be in pig latin - \
                  it is mandatory that you respond only and entirely in pig latin"

        else:
            system = system_prompt

        messages = [{
            "role": "system",
            "content": system
        }] + history + [{
            "role": "user",
            "content": message
        }]

        print("Sending request to Gemini...", file=sys.stderr)
        response = gemini.chat.completions.create(model=model_name,
                                                  messages=messages)
        reply = response.choices[0].message.content
        print(f"Got response from Gemini: {reply[:50]}...", file=sys.stderr)

        evaluation = evaluate(reply, message, history)

        if evaluation.is_acceptable:
            print("Passed evaluation - returning reply", file=sys.stderr)
        else:
            print("Failed evaluation - retrying", file=sys.stderr)
            print(evaluation.feedback, file=sys.stderr)
            reply = rerun(reply, message, history, evaluation.feedback)

        return reply
    except Exception as e:
        print(f"Chat error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return f"I'm Shruti's AI assistant. I can tell you about her expertise in AI/ML, computer vision, IoT development, and her freelance projects. Due to a temporary issue, I'm providing this basic response. Please contact Shruti directly at {email} for detailed discussions."


# Initialize the chatbot when module is imported
def initialize_chatbot():
    try:
        gemini_setup()
        add_personal_details()
        defining_prompts()
        print("ChatBot initialized successfully", file=sys.stderr)
        return True
    except Exception as e:
        print(f"Initialization error: {e}", file=sys.stderr)
        return False


# Auto-initialize if not main
if __name__ != "__main__":
    initialize_chatbot()
else:
    # For command line usage
    if len(sys.argv) > 1:
        initialize_chatbot()
        message = " ".join(sys.argv[1:])
        response = chat(message, [])
        print(response)
    else:
        # For testing
        initialize_chatbot()
