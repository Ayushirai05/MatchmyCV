import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="py-16 px-6 pt-32">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have questions or need help? Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md h-fit">
            <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-2">📞 Phone: +91 99999 88888</li>
              <li className="flex items-center gap-2">📧 Email: support@matchmycv.com</li>
              <li className="flex items-center gap-2">📍 Address: India</li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary mb-2">Follow Us</h3>
              <div className="flex gap-4 text-gray-600">
                <a href="#" className="hover:text-primary transition">Facebook</a>
                <a href="#" className="hover:text-primary transition">Twitter</a>
                <a href="#" className="hover:text-primary transition">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;