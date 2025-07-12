import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-2 md:mt-8">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-12"
      >
        Bharat ke Mandir
      </motion.h1>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6 text-lg text-gray-700 leading-relaxed"
      >
        <p>
          <span className="font-semibold text-black">Bharat ke Mandir</span> is a
          devotee-led movement aiming to build a detailed online repository of
          temples across Bharatvarsha. It is a not-for-profit knowledge platform
          built to document and preserve every possible detail about our sacred
          temples.
        </p>
        <p>
          The platform features locations, images, videos, temple timings, and
          other important details — all contributed by devotees like you. You can
          even discover hidden temples around your area.
        </p>
        <p>
          Our mission is to make people aware of India's glorious heritage, deeply
          rooted in the temple culture and Sanatan Dharma.
        </p>
      </motion.div>

      {/* Team Info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-black mb-4">Our Team</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>
            We are a group of students from <strong>IIT Madras</strong> mentored
            by Prof. Meenakshi Rao.
          </li>
          <li>
            <strong>Core Team:</strong> Rohan Kulkarni, Sneha Deshpande
          </li>
        </ul>
      </motion.div>

      {/* Acknowledgements */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-black mb-4">Acknowledgements</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Prof. Harish Shetty</li>
          <li>Prof. Kalpana Iyer</li>
          <li>Ritika Sharma</li>
          <li>Deepanshu Tiwari</li>
          <li>Yash Mehta (Android)</li>
          <li>Mohit Bansal (App Backend)</li>
          <li>Riddhi Kapoor (Web Backend)</li>
          <li>Tanmay Jadhav (Web Frontend)</li>
          <li>Ishaan Vora</li>
        </ul>
      </motion.div>

      {/* Donations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-black mb-4">Support Bharat ke Mandir</h2>
        <p className="text-gray-700 mb-4">
          We thank Shubham Patel and Neelam Rathi for their generous
          donations of ₹75,000 each (2023–24 & 2022–23).
        </p>
        <p className="text-gray-700">
          <strong>Bharat ke Mandir</strong> is sustained through the help of
          volunteers and donations from devotees like you. You can help us by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-800">
          <li>Contributing temple data</li>
          <li>Supporting financially</li>
          <li>
            Joining the tech team — mail us at:{' '}
            <a href="mailto:devs@bharatkemandir.org" className="text-green-700 underline">
              devs@bharatkemandir.org
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 border-t pt-6"
      >
        <h2 className="text-xl font-semibold text-black mb-2">Contact Us</h2>
        <p className="text-gray-700">
          For queries, email us at:{' '}
          <a href="mailto:contact@bharatkemandir.org" className="text-green-700 underline">
            contact@bharatkemandir.org
          </a>
        </p>
      </motion.div>
    </section>
  );
}
