import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Award, Code, Users } from "lucide-react";

export function ExperienceSection() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Velagapudi Ramakrishna Siddhartha Engineering College",
      period: "Feb 2021 - Aug 2022",
      grade: "A+",
      description:
        "Specialized in Computer Science with focus on software development, web technologies, and system design. Gained comprehensive knowledge in programming languages, database management, and software engineering principles.",
      achievements: [
        "Achieved A+ grade with distinction",
        "Completed advanced projects in React and JavaScript",
        "Participated in coding competitions and hackathons",
        "Led team projects on web application development",
      ],
      technologies: [
        "Java",
        "C++",
        "Database Management",
        "Software Engineering",
        "Web Development",
      ],
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "AppNetWise",
      period: "2022 - Present",
      description:
        "Building responsive web applications and UI components using modern frontend technologies. Focus on creating seamless user experiences with clean, maintainable code.",
      achievements: [
        "Projects completed using React, TypeScript, and Next.js",
        "Developed reusable component libraries with Figma integration",
        "Implemented responsive designs with 98% cross-browser compatibility",
        "Optimized application performance resulting in 40% faster load times",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Figma", "Tailwind CSS"],
      icon: Code,
    },
  ];

  const certifications = [
    "Frontend Development with React",
    "Modern JavaScript ES6+",
    "UI/UX Design Principles",
    "Responsive Web Design",
    "TypeScript Fundamentals",
    "Git & Version Control",
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            Experience & Education
          </Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">My Learning Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From academic excellence to practical development experience, here's
            how I've built my skills in frontend development and UI/UX design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience & Projects */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Experience & Projects</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(155, 127, 212, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <CardHeader>
                      <div className="flex items-start gap-4">
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
                            <exp.icon className="h-6 w-6 text-primary" />
                          </motion.div>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="text-xl">
                              {exp.title}
                            </CardTitle>
                            <Badge variant="secondary">{exp.period}</Badge>
                          </div>
                          <p className="text-primary">{exp.company}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>

                      <div className="space-y-2">
                        <h5 className="text-sm">Key Achievements:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: achIndex * 0.1,
                              }}
                            >
                              <span className="text-primary mt-1.5">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: techIndex * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            <h3 className="text-2xl mb-6 mt-12">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(155, 127, 212, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden">
                    <motion.div
                      className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "var(--accent)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <edu.icon className="h-6 w-6 text-accent-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <CardTitle className="text-xl">
                              {edu.degree}
                            </CardTitle>
                            <div className="flex gap-2">
                              <Badge variant="secondary">{edu.period}</Badge>
                              <Badge
                                variant="outline"
                                className="bg-primary/10 text-primary border-primary/20"
                              >
                                Grade: {edu.grade}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-primary">{edu.school}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{edu.description}</p>

                      <div className="space-y-2">
                        <h5 className="text-sm">Key Achievements:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: achIndex * 0.1,
                              }}
                            >
                              <span className="text-primary mt-1.5">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {edu.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: techIndex * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Skills */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Certifications */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl">Certifications & Learning</h3>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(155, 127, 212, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years of Study", value: "5+" },
                  { label: "GPA Average", value: "A+" },
                  { label: "Projects Built", value: "15+" },
                  { label: "Tech Stack", value: "10+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(155, 127, 212, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-4 text-center">
                        <motion.div
                          className="text-2xl text-primary mb-1"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                            bounce: 0.4,
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
