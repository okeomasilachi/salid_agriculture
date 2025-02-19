"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Agriculture landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 text-center">Get in Touch</h1>
            <p className="text-xl text-center max-w-2xl">
              We&apos;d love to hear from you! Reach out for inquiries, partnerships,
              or feedback.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Form & Information Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <p>123 Farm Road, Agricultural District, Country</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <p>+1 (234) 567-8900</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">✉️</span>
                <p>contact@agricompany.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🕒</span>
                <p>Mon-Fri, 9 AM - 5 PM</p>
              </div>
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Find Us on the Map</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Add your Google Maps embed here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-50 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Grow Together</h2>
          <p className="mb-8">
            Whether you&apos;re a farmer, partner, or customer, we&apos;d love to hear
            from you.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Explore Our Products
            </button>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-50 transition">
              Learn More About Us
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
