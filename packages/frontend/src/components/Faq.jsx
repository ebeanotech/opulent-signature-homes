import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";

// Faq component
const Faq = () => {
  // State to keep track of the currently active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // List of FAQs with questions and answers
  const faqs = [
    {
      question: "How do I Schedule a viewing for a property I'm interested in?",
      answer:
        "To schedule a viewing, you can contact us directly through the contact information provided on the property listing page. Alternatively, you can use the “Schedule a Viewing” button available on our website, and one of our agents will get in touch with you to confirm the appointment.",
    },
    {
      question: "Can I make an offer below the asking price?",
      answer:
        "Yes, you can make an offer below the asking price. Our agents will present your offer to the seller, who will then decide whether to accept, reject, or negotiate further. We recommend basing your offer on comparable market analysis and the condition of the property.",
    },
    {
      question: "What is included in the sale of the property?",
      answer:
        "Inclusions vary by property but typically include fixtures and fittings such as kitchen units, bathroom suites, and built-in wardrobes. Some properties may also include appliances or furniture. The listing details will specify what is included, and our agents can provide clarification if needed.",
    },
    {
      question: "What happens if I have a problem after I buy the property?",
      answer:
        "If you encounter issues after purchasing the property, we encourage you to reach out to us. While post-sale issues are typically handled by the buyer and their legal advisors, our agents can provide guidance and connect you with resources to address any problems.",
    },
  ];

  // Function to toggle the visibility of the FAQ answer
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full p-4 py-20 bg-white">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-bold mb-11 text-center flex justify-center items-center gap-1">
        Frequently Asked Questions
        <FaQuestion className="text-[#992c99] animate-pulse" />
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="border rounded-lg shadow-lg hover:shadow-xl"
          >
            {/* FAQ Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {/* FAQ Answer */}
            {activeIndex === index && (
              <div className="px-4 py-7 bg-gray-50">
                <p className="text-base">{faq.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
