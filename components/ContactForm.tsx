"use client"

import { useState } from "react"
import AnimatedButton from "./ui/AnimatedButton"


export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(form)

    // Later connect to API / email service
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#032841] p-8 rounded-2xl space-y-6"
    >

      <h2 className="text-2xl font-semibold">
        Send Us a Message
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-gray-600 rounded-lg p-3 outline-none focus:border-[#0196f4]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-gray-600 rounded-lg p-3 outline-none focus:border-[#0196f4]"
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
        className="w-full bg-transparent border border-gray-600 rounded-lg p-3 outline-none focus:border-[#0196f4]"
      />

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        rows={5}
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-gray-600 rounded-lg p-3 outline-none focus:border-[#0196f4]"
      />

      <AnimatedButton label="Send Message" />

    </form>
  )
}