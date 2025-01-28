"use client";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptedTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

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

    console.log("Submitting Form Data:", formData); // Debugging

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response from API:", result); // Debugging API Response

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", acceptedTerms: false });
      } else {
        setResponseMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h2 className="text-xl text-gray-600">Contact me</h2>
        <h1 className="text-5xl font-bold mt-2">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear about your project requirements.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="block text-lg font-medium text-gray-800">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-800">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
            className="h-5 w-5"
          />
          <label className="text-gray-800">I accept the Terms</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition dark:bg-gray-200 dark:text-black dark:hover:bg-gray-700"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {responseMessage && (
          <p className="text-center text-lg font-medium text-blue-600 mt-4">
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
