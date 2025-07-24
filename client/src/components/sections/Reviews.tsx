import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User, Briefcase } from "lucide-react";

// Store reviews here - you can easily add more reviews to this array
const reviews = [
  {
    id: 1,
    name: "Neha Londhe",
    position: "Purchase Executive",
    rating: 5,
    feedback:
      "The tool makes it extremely easy to consolidate multiple BOMs into a single Excel file. One of the most helpful features is how it automatically combines duplicate entries of the same item and sums up the total quantity. This ensures that I always get an accurate total quantity for each part, which is essential when ordering materials. Thanks to this tool, I've improved the accuracy of my material orders and significantly reduced the time spent on manual BOM editing. It's a great solution for anyone managing parts across complex assemblies or multiple projects.",
    projectType: "BOM Merging Tool",
    avatar: "NL",
    bgColor: "from-purple-500 to-pink-500",
  },
  // Add future reviews here in the same format:
  {
    id: 2,
    name: "Vaidehi Pawar",
    position: "Sales Representative",
    rating: 4,
    feedback: "Manual Creator is a fantastic tool that revolutionizes the manual creation process, reducing the time from days to just 5 minutes. Previously, compiling documents and organizing data in MS Word would take 2-3 days, but with this tool, tasks like creating installation manuals and operational guides become efficient and seamless",
    projectType: "Project Manual Maker Tool",
    avatar: "VP", // First letters of name
    bgColor: "from-blue-500 to-green-500", // Choose gradient colors
  },
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#0A0F24] via-[#2B1B3D] to-[#0A0F24]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF6B9D] to-[#FFD93D] bg-clip-text text-transparent">
              Client Reviews
            </h2>
            <p className="text-lg text-[#E4E4E4]/80 max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-to-br from-[#1A1F3A]/80 to-[#2D1B4E]/60 border-0 shadow-2xl hover:shadow-[#FF6B9D]/20 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-8 h-8 text-[#FF6B9D] opacity-60" />
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-[#E4E4E4]/90 leading-relaxed mb-6 text-sm">
                      "{review.feedback}"
                    </p>

                    {/* Project Type */}
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#FFD93D]/20 to-[#FF6B9D]/20 border border-[#FFD93D]/30 rounded-full text-xs font-medium text-[#FFD93D]">
                        {review.projectType}
                      </span>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${review.bgColor} flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#E4E4E4] text-sm">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[#E4E4E4]/70 text-xs">
                          <Briefcase className="w-3 h-3" />
                          {review.position}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Add More Reviews Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reviews.length * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-[#1A1F3A]/40 to-[#2D1B4E]/30 border-2 border-dashed border-[#FF6B9D]/30 hover:border-[#FF6B9D]/60 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                  <User className="w-12 h-12 text-[#FF6B9D]/60 mb-4" />
                  <h4 className="font-semibold text-[#E4E4E4] mb-2">
                    Your Review Here
                  </h4>
                  <p className="text-[#E4E4E4]/70 text-sm">
                    Worked with Shruti? Share your experience!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#E4E4E4]/60 text-sm">
              Want to add your review? Contact me at{" "}
              <a
                href="mailto:shruti.pawar0713@gmail.com"
                className="text-[#FFD93D] hover:underline"
              >
                shruti.pawar0713@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
