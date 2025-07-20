import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can integrate with Formspree, EmailJS, or your backend here
  };

  return (
    <div className="  flex items-center justify-center text-white  min-h-screen pb-40">
      <form onSubmit={handleSubmit} className=" p-8 rounded shadow-md  ">
        <h2 className="text-7xl md:text-5xl font-extrabold text-blue-200 text-center mt-12 mb-10">Contact Us</h2>

        <label className="block mb-2 text-sm font-medium text-white">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        <label className="block mb-2 text-sm font-medium text-white">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        <label className="block mb-2 text-sm font-medium text-white">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows="4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
