import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Figma, Eye } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A complete mobile shopping experience with intuitive navigation, product discovery, and seamless checkout flow. Designed with accessibility and user engagement in mind.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: [
        "Figma",
        "React Native",
        "User Research",
        "Prototyping",
        "Design System",
      ],
      liveUrl: "#",
      figmaUrl: "#",
      featured: true,
    },
    {
      title: "SaaS Dashboard Design",
      description:
        "A comprehensive admin dashboard for a project management SaaS platform with data visualization, team collaboration features, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: [
        "Figma",
        "React",
        "Chart.js",
        "Design Tokens",
        "Accessibility",
      ],
      liveUrl: "#",
      figmaUrl: "#",
      featured: true,
    },
    {
      title: "Banking App Redesign",
      description:
        "Complete UX redesign of a banking application focusing on simplified navigation, enhanced security features, and improved user onboarding.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Adobe XD", "User Testing", "Wireframing", "Prototyping"],
      liveUrl: "#",
      figmaUrl: "#",
      featured: false,
    },
    {
      title: "Creative Portfolio Website",
      description:
        "A stunning portfolio website for a creative agency with smooth animations, interactive elements, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["Figma", "React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      figmaUrl: "#",
      featured: false,
    },
    {
      title: "Health & Fitness App",
      description:
        "A comprehensive fitness tracking app with workout planning, progress tracking, and social features to motivate users.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: [
        "Sketch",
        "React Native",
        "User Journey Mapping",
        "A/B Testing",
      ],
      liveUrl: "#",
      figmaUrl: "#",
      featured: false,
    },
    {
      title: "Educational Platform UI",
      description:
        "An intuitive learning management system design with course management, progress tracking, and interactive learning modules.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: [
        "Figma",
        "Design System",
        "User Research",
        "Accessibility",
      ],
      liveUrl: "#",
      figmaUrl: "#",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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

  const ProjectCard = ({
    project,
    index,
    isFeatured = false,
  }: {
    project: any;
    index: number;
    isFeatured?: boolean;
  }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]));
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]));

    return (
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag={!isFeatured}
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(155, 127, 212, 0.2)",
          y: -10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
      >
        <Card className="overflow-hidden group relative">
          {/* Floating Glow Effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-75"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <CardHeader className="p-0 relative overflow-hidden">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Floating Icons */}
              <motion.div
                className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
                initial={{ y: -20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button size="sm" variant="secondary" className="p-2">
                    <Eye className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </CardHeader>

          <CardContent className="p-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <CardTitle className="mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </CardTitle>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            <div className="flex flex-wrap gap-1">
              {project.technologies
                .slice(0, 3)
                .map((tech: string, techIndex: number) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="text-xs transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0">
            <div className="flex gap-2 w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full gap-2 group/btn"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="opacity-0 group-hover/btn:opacity-100"
                  >
                    <Eye className="h-3 w-3" />
                  </motion.div>
                  Demo
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full gap-2 group/btn"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Figma className="h-3 w-3" />
                  </motion.div>
                  Design
                </Button>
              </motion.div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 5px 15px rgba(155, 127, 212, 0.2)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-transparent"
                animate={{ x: [-100, 200] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Portfolio</span>
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Here are some of my favorite UI/UX projects that showcase my design
            process and passion for creating exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 30px 60px rgba(155, 127, 212, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden relative">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ opacity: 0.1 }}
                  style={{
                    backgroundSize: "200% 200%",
                    padding: "2px",
                    borderRadius: "inherit",
                  }}
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  } relative bg-card rounded-lg`}
                >
                  <motion.div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    } relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />

                    {/* Floating particles on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary/40 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  <div
                    className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="secondary">Featured</Badge>
                        </motion.div>
                      </div>

                      <motion.h3
                        className="text-2xl"
                        whileHover={{ color: "var(--primary)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>

                      <p className="text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(
                          (tech: string, techIndex: number) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: techIndex * 0.1,
                              }}
                              whileHover={{
                                scale: 1.1,
                                y: -2,
                                boxShadow:
                                  "0 5px 15px rgba(155, 127, 212, 0.3)",
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="transition-all duration-200"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          )
                        )}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="gap-2 relative overflow-hidden group"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                              animate={{ x: [-100, 200] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            <Eye className="h-4 w-4 relative z-10" />
                            <span className="relative z-10">Live Demo</span>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" size="sm" className="gap-2">
                            <Figma className="h-4 w-4" />
                            Design
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <div className="space-y-8">
          <motion.h3
            className="text-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Other Projects
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
