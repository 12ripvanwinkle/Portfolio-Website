import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from '../TitleHeader'

const Contact = () => {
  // Reference to form DOM element
  const formRef = useRef(null);

  // Loading state for submit button
  const [loading, setLoading] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    setLoading(true);   // show loading indicator

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form fields on success
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // optional error handling
    } finally {
      setLoading(false); // always stop loading
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        {/* Section header */}
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">

              {/* Contact form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* Name input */}
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Submit button */}
                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
