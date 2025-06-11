import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { send } from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await send(
        "service_les6kit",
        "template_7lyi57q",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "5NxeIkOQ6j32Y7DGY"
      );
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitSuccess(false);
      alert("Gửi liên hệ thất bại. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-secondary transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Get In Touch
            </h3>
            <p className="text-lg mb-8 text-secondary">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out and I'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 text-white rounded-full dark:bg-gray-800 transition-colors duration-300">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p className="text-secondary">baoqg9104@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 text-white rounded-full dark:bg-gray-800 transition-colors duration-300">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <p className="text-secondary">0967 508 274</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 text-white rounded-full dark:bg-gray-800 transition-colors duration-300">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Location</h4>
                  <p className="text-secondary">Ho Chi Minh City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary text-secondary transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary text-secondary transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary text-secondary transition-colors duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-6 py-3 bg-gradient-to-r from-primary-600 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="mr-2" /> Send Message
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg dark:bg-green-900 dark:text-green-100 transition-colors duration-300">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
