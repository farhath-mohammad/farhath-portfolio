import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "farhathayeshamd@gmail.com",
      href: "mailto:farhathayeshamd@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/farhath-ayesha-mohammad-59848724b/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                animate={{ x: [-100, 200] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Contact</span>
            </Badge>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited about new opportunities and collaborations. Let's
            discuss how we can create something amazing together.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                boxShadow: "0 10px 25px rgba(155, 127, 212, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <iframe
                    width="680px"
                    height="480px"
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__leHkkNUQkpPREpaV1RBMzBCQ0tOTTBUUDBMMUhHVS4u&embed=true"
                    frameBorder="0"
                    marginWidth={0}
                    marginHeight={0}
                    style={{
                      border: "none",
                      maxWidth: "100%",
                      maxHeight: "100vh",
                    }}
                    allowFullScreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    msallowfullscreen="true"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <h3 className="text-2xl">Get in touch</h3>
              <p className="text-muted-foreground">
                I'm currently looking for new opportunities in frontend
                development and UI/UX design. Whether you need a developer for
                your team, have a project in mind, or just want to connect, I'd
                love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(155, 127, 212, 0.1)",
                  }}
                >
                  <Card className="transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "var(--primary)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            whileHover={{ color: "var(--primary-foreground)" }}
                            transition={{ duration: 0.3 }}
                          >
                            <info.icon className="h-6 w-6 text-primary" />
                          </motion.div>
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                            target={
                              info.href.startsWith("http") ? "_blank" : "_self"
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(155, 127, 212, 0.2)",
              }}
            >
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg mb-2">Ready to start a project?</h4>
                  <p className="text-primary-foreground/80 mb-4">
                    Let's discuss your frontend development needs and create
                    something amazing together.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" size="lg">
                      Schedule a Call
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
