// 'use client';

// import { useState } from 'react';
// import { useTheme } from './ThemeProvider';
// import SectionTitle from './SectionTitle';
// import Button from './Button';
// import { Mail, Linkedin, Github, MapPin, Phone, Send, ExternalLink } from 'lucide-react';

// const contactInfo = [
//   {
//     icon: Mail,
//     label: 'Email',
//     value: 'diduladdsl@gmail.com',
//     link: 'mailto:diduladdsl@gmail.com',
//   },
//   {
//     icon: Phone,
//     label: 'Phone',
//     value: '+94 70 5841 668',
//     link: 'tel:+94705841668',
//   },
//   {
//     icon: MapPin,
//     label: 'Location',
//     value: 'Colombo, Sri Lanka',
//   },
// ];

// const socialLinks = [
//   {
//     icon: Github,
//     label: 'GitHub',
//     username: '@didulasri',
//     link: 'https://github.com/didulasri',
//   },
//   {
//     icon: Linkedin,
//     label: 'LinkedIn',
//     username: 'in/didulasri',
//     link: 'https://linkedin.com/in/didulasri',
//   },
//   {
//     icon: ExternalLink,
//     label: 'Medium',
//     username: '@diduladdsl',
//     link: 'https://medium.com/@diduladdsl',
//   },
// ];

// export default function Connect() {
//   const { theme } = useTheme();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Create mailto link with form data
//     const mailtoLink = `mailto:diduladdsl@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
//     )}`;
//     window.location.href = mailtoLink;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section
//       id="connect"
//       className={`py-20 md:py-32 ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'}`}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionTitle
//           title="Let's Connect"
//           subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
//           align="center"
//         />

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className={`font-display text-2xl md:text-3xl font-bold mb-6 ${
//                 theme === 'dark' ? 'text-white' : 'text-dark-bg'
//               }`}>
//                 Get in Touch
//               </h3>
//               <p className={`font-mono text-base mb-8 leading-relaxed ${
//                 theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//               }`}>
//                 I&apos;m actively seeking software engineering opportunities where I can contribute
//                 to meaningful projects and continue growing as a developer. Whether you have
//                 a job opportunity, a project collaboration, or just want to connect, feel free
//                 to reach out!
//               </p>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-4">
//               {contactInfo.map((info) => {
//                 const Icon = info.icon;
//                 const content = (
//                   <div
//                     className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
//                       info.link ? 'cursor-pointer hover:border-primary hover:scale-105' : ''
//                     } ${
//                       theme === 'dark'
//                         ? 'bg-dark-card border-dark-border'
//                         : 'bg-gray-50 border-gray-200'
//                     }`}
//                   >
//                     <div className="p-3 rounded-lg bg-primary/10 border-2 border-primary">
//                       <Icon className="text-primary" size={24} />
//                     </div>
//                     <div>
//                       <p className={`font-mono text-xs mb-1 ${
//                         theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//                       }`}>
//                         {info.label}
//                       </p>
//                       <p className={`font-mono text-sm font-semibold ${
//                         theme === 'dark' ? 'text-white' : 'text-dark-bg'
//                       }`}>
//                         {info.value}
//                       </p>
//                     </div>
//                   </div>
//                 );

//                 return info.link ? (
//                   <a key={info.label} href={info.link}>
//                     {content}
//                   </a>
//                 ) : (
//                   <div key={info.label}>{content}</div>
//                 );
//               })}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className={`font-display text-xl font-bold mb-4 ${
//                 theme === 'dark' ? 'text-white' : 'text-dark-bg'
//               }`}>
//                 Find Me Online
//               </h4>
//               <div className="space-y-3">
//                 {socialLinks.map((social) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={social.label}
//                       href={social.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:border-primary hover:scale-105 ${
//                         theme === 'dark'
//                           ? 'bg-dark-card border-dark-border'
//                           : 'bg-gray-50 border-gray-200'
//                       }`}
//                     >
//                       <Icon className="text-primary" size={24} />
//                       <div>
//                         <p className={`font-mono text-sm font-semibold ${
//                           theme === 'dark' ? 'text-white' : 'text-dark-bg'
//                         }`}>
//                           {social.label}
//                         </p>
//                         <p className="font-mono text-xs text-primary">
//                           {social.username}
//                         </p>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div
//             className={`p-8 md:p-10 rounded-2xl border-2 ${
//               theme === 'dark'
//                 ? 'bg-dark-card border-primary/20'
//                 : 'bg-gray-50 border-gray-300'
//             }`}
//           >
//             <h3 className={`font-display text-2xl md:text-3xl font-bold mb-6 ${
//               theme === 'dark' ? 'text-white' : 'text-dark-bg'
//             }`}>
//               Send a Message
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className={`block font-mono text-sm mb-2 ${
//                     theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//                   }`}
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all focus:outline-none focus:border-primary ${
//                     theme === 'dark'
//                       ? 'bg-dark-bg border-dark-border text-white'
//                       : 'bg-white border-gray-300 text-dark-bg'
//                   }`}
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className={`block font-mono text-sm mb-2 ${
//                     theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//                   }`}
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all focus:outline-none focus:border-primary ${
//                     theme === 'dark'
//                       ? 'bg-dark-bg border-dark-border text-white'
//                       : 'bg-white border-gray-300 text-dark-bg'
//                   }`}
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className={`block font-mono text-sm mb-2 ${
//                     theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//                   }`}
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all focus:outline-none focus:border-primary resize-none ${
//                     theme === 'dark'
//                       ? 'bg-dark-bg border-dark-border text-white'
//                       : 'bg-white border-gray-300 text-dark-bg'
//                   }`}
//                   placeholder="Tell me about your project or opportunity..."
//                 />
//               </div>

//               <Button type="submit" variant="primary" size="lg" className="w-full">
//                 <Send size={20} />
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "diduladdsl@gmail.com",
    link: "mailto:diduladdsl@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 70 5841 668",
    link: "tel:+94705841668",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@didulasri",
    link: "https://github.com/didulasri",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "in/didulasri",
    link: "https://linkedin.com/in/didulasri",
  },
  {
    icon: ExternalLink,
    label: "Medium",
    username: "@diduladdsl",
    link: "https://medium.com/@diduladdsl",
  },
];

export default function Connect() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendWithEmailJS = async () => {
    const emailjs = (await import("@emailjs/browser")).default;

    // Get values from environment variables or use defaults
    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "diduladdsl@gmail.com",
      },
      publicKey,
    );
  };

  const sendWithFormspree = async () => {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "YOUR_FORM_ID";

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }
  };

  const sendWithResend = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }
  };

  const fallbackToMailto = () => {
    const mailtoLink = `mailto:diduladdsl@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Try EmailJS first (if configured)
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID"
      ) {
        await sendWithEmailJS();
      }
      // Try Formspree second (if configured)
      else if (
        process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID &&
        process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID !== "YOUR_FORM_ID"
      ) {
        await sendWithFormspree();
      }
      // Try Resend API route third (if available)
      else {
        try {
          await sendWithResend();
        } catch {
          // If all else fails, use mailto
          fallbackToMailto();
          setStatus("idle");
          return;
        }
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Opening your email client...");

      // Fallback to mailto as backup
      setTimeout(() => {
        fallbackToMailto();
        setStatus("idle");
      }, 2000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="connect"
      className={`py-20 md:py-32 ${theme === "dark" ? "bg-dark-bg" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Let's Connect"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className={`font-display text-2xl md:text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-dark-bg"
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`font-mono text-base mb-8 leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I&apos;m actively seeking software engineering opportunities
                where I can contribute to meaningful projects and continue
                growing as a developer. Whether you have a job opportunity, a
                project collaboration, or just want to connect, feel free to
                reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      info.link
                        ? "cursor-pointer hover:border-primary hover:scale-105"
                        : ""
                    } ${
                      theme === "dark"
                        ? "bg-dark-card border-dark-border"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 border-2 border-primary">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p
                        className={`font-mono text-xs mb-1 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {info.label}
                      </p>
                      <p
                        className={`font-mono text-sm font-semibold ${
                          theme === "dark" ? "text-white" : "text-dark-bg"
                        }`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={info.label} href={info.link}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`font-display text-xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-dark-bg"
                }`}
              >
                Find Me Online
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:border-primary hover:scale-105 ${
                        theme === "dark"
                          ? "bg-dark-card border-dark-border"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <Icon className="text-primary" size={24} />
                      <div>
                        <p
                          className={`font-mono text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-dark-bg"
                          }`}
                        >
                          {social.label}
                        </p>
                        <p className="font-mono text-xs text-primary">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 md:p-10 rounded-2xl border-2 ${
              theme === "dark"
                ? "bg-dark-card border-primary/20"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <h3
              className={`font-display text-2xl md:text-3xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-dark-bg"
              }`}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block font-mono text-sm mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all focus:outline-none focus:border-primary disabled:opacity-50 ${
                    theme === "dark"
                      ? "bg-dark-bg border-dark-border text-white"
                      : "bg-white border-gray-300 text-dark-bg"
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block font-mono text-sm mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all focus:outline-none focus:border-primary disabled:opacity-50 ${
                    theme === "dark"
                      ? "bg-dark-bg border-dark-border text-white"
                      : "bg-white border-gray-300 text-dark-bg"
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-mono text-sm mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all focus:outline-none focus:border-primary resize-none disabled:opacity-50 ${
                    theme === "dark"
                      ? "bg-dark-bg border-dark-border text-white"
                      : "bg-white border-gray-300 text-dark-bg"
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                <Send size={20} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {/* Status Messages */}
              {status === "success" && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg border-2 animate-fade-in ${
                    theme === "dark"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-green-50 border-green-500 text-green-700"
                  }`}
                >
                  <CheckCircle size={20} />
                  <span className="font-mono text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg border-2 animate-fade-in ${
                    theme === "dark"
                      ? "bg-red-900/20 border-red-500 text-red-400"
                      : "bg-red-50 border-red-500 text-red-700"
                  }`}
                >
                  <AlertCircle size={20} />
                  <span className="font-mono text-sm">{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
