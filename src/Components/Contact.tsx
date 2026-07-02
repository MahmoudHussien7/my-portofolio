"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/Components/ui/section-header";
import { FadeIn } from "@/Components/ui/motion";
import { Button } from "@/Components/ui/button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptedTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setResponseMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "", acceptedTerms: false });
      } else {
        setIsSuccess(false);
        setResponseMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setResponseMessage("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <section id="contact" className="section-container">
      <SectionHeader
        label="Contact"
        title="Get in Touch"
        description="Have a project in mind? I'd love to hear about it. Let's build something great together."
      />

      <FadeIn>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 p-8 rounded-2xl border border-border bg-surface shadow-card"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={inputClasses}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <label htmlFor="terms" className="text-sm text-muted">
              I accept the terms and agree to be contacted regarding my inquiry.
            </label>
          </div>

          <Button type="submit" disabled={loading} className="w-full" size="lg">
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </Button>

          <AnimatePresence mode="wait">
            {responseMessage && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex items-center gap-2 justify-center text-sm font-medium ${
                  isSuccess ? "text-secondary" : "text-red-500"
                }`}
              >
                {isSuccess ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                {responseMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </FadeIn>
    </section>
  );
};

export default Contact;
