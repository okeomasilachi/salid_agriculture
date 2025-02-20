"use client";

import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed:", { name, email });
  };

  return (
    <footer className="bg-[#2C5530] text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", link: "/about" },
                { label: "Products", link: "/#products" },
                { label: "Quality Control", link: "/#quality" },
                { label: "Team", link: "/#team" },
                { label: "Latest News", link: "/blog" },
                { label: "Contact Us", link: "/contact" },
                { label: "Careers", link: "/career" },
                { label: "Privacy Policy", link: "/privacy-policy" },
                { label: "Terms of Service", link: "/terms-of-service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.link}
                    className="hover:text-green-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MdLocationOn className="text-xl" />
                123 Agriculture Street, Farm City
              </p>
              <p className="flex items-center gap-2">
                <MdPhone className="text-xl" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                info@agriwebsite.com
              </p>
              <p className="flex items-center gap-2">
                <MdAccessTime className="text-xl" />
                Mon-Fri, 9 AM - 5 PM
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-4">
              Get the latest news, tips, and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded text-gray-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 rounded text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                size="lg"
                type="submit"
                className="transition-colors w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-2xl hover:text-green-300 transition-colors"
                  >
                    <Icon />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} Salid Agriculture. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-green-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline-block">|</span>
            <Link href="#" className="hover:text-green-300 transition-colors">
              Terms of Service
            </Link>
            <span className="hidden md:inline-block">|</span>
            <Link href="#" className="hover:text-green-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
