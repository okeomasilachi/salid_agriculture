"use client";
import React, { useState } from "react";
import Image from "next/image";

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: "Agricultural Engineer",
    location: "California",
    type: "Full-time",
    description: "Design and implement innovative farming solutions",
  },
  // Add more jobs as needed
];

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Field Operations Manager",
    quote:
      "Working here has been a rewarding experience. I love being part of a team that values sustainability.",
    image: "/path-to-image.jpg",
  },
  // Add more testimonials as needed
];

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/hero-image.jpg"
          alt="Team working on farm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Grow Your Career with Us
            </h1>
            <p className="text-xl mb-8 text-center">
              Join our team and be part of a mission to revolutionize
              agriculture.
            </p>
            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full">
              Explore Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Innovative Environment",
              "Career Growth",
              "Work-Life Balance",
            ].map((benefit) => (
              <div
                key={benefit}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  {/* Add icons here */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Open Positions
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            {["all", "full-time", "part-time", "remote"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded ${
                  activeFilter === filter
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">
                      {job.location}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">{job.type}</span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Hear from Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="italic mb-4">{testimonial.quote}</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Application Process
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              "Submit Application",
              "Initial Interview",
              "Final Interview",
              "Offer",
            ].map((step, index) => (
              <div key={step} className="flex items-start mb-8">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8">
            We&apos;re always looking for talented individuals to join our
            mission. Apply today!
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100">
              Explore Open Positions
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-green-600">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
