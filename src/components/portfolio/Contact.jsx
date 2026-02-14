import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  const send = e => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      ...form,
      portfolio_tag: "This email comes from your portfolio — February 2026"
    };

    emailjs.send(
      "service_1ih66b7",      
      "template_zz682an",     
      "FJ9Rnf0Jhv9pSAbvZ"       
    )
    .then(() => setStatus("sent"))
    .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <form onSubmit={send} className="space-y-6">

          <input
            placeholder="Name"
            value={form.name}
            required
            className="w-full p-4 border rounded-xl bg-beige dark:bg-gray-800"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            type="email"
            value={form.email}
            required
            className="w-full p-4 border rounded-xl bg-beige dark:bg-gray-800"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Message"
            value={form.message}
            required
            className="w-full p-4 border rounded-xl bg-beige dark:bg-gray-800"
            rows="5"
            onChange={e => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 bg-orange-500 text-white rounded-xl disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message →"}
          </button>

          {status === "sent" && (
            <p className="text-green-500 text-center">✓ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
          )}

        </form>
      </div>
    </section>
  );
}
