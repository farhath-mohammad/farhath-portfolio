import { motion } from 'framer-motion'
import { Badge } from './ui/badge'

export function SkillsSection() {
  const designSkills = [
    { name: 'FIGMA', level: 90 },
    { name: 'UI/UX DESIGN', level: 85 },
    { name: 'PROTOTYPING', level: 88 },
    { name: 'WIREFRAMING', level: 82 },
    { name: 'USER RESEARCH', level: 75 },
    { name: 'RESPONSIVE DESIGN', level: 92 },
  ]

  const developmentSkills = [
    { name: 'REACT', level: 90 },
    { name: 'TYPESCRIPT', level: 85 },
    { name: 'JAVASCRIPT', level: 88 },
    { name: 'NEXT.JS', level: 82 },
    { name: 'GATSBY', level: 80 },
    { name: 'HTML/CSS', level: 95 },
  ]

  const technologies = [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Gatsby',
    'Figma',
    'HTML/CSS',
    'Tailwind CSS',
    'Git & GitHub',
    'Responsive Design',
    'UI/UX Design',
    'Prototyping',
    'Wireframing',
    'User Research',
    'Frontend Development',
    'Web Performance',
    'Accessibility',
    'Cross-browser Testing',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const SkillBar = ({ skill, index, delay = 0 }: { skill: { name: string; level: number }, index: number, delay?: number }) => (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + index * 0.1 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm tracking-wider text-foreground/90">{skill.name}</span>
        <span className="text-sm text-primary">{skill.level}%</span>
      </div>
      <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: delay + index * 0.15,
            ease: "easeOut"
          }}
        />
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/30 to-transparent rounded-full"
          animate={{ x: [-100, skill.level * 4] }}
          transition={{ 
            duration: 2, 
            delay: delay + index * 0.15 + 1,
            ease: "easeInOut"
          }}
          style={{ width: '20%' }}
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              <span className="relative z-10">Skills & Technologies</span>
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Technical Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With 2.5 years of experience, I've developed proficiency in modern frontend 
            technologies and design tools to create exceptional web experiences.
          </motion.p>
        </motion.div>

        {/* Skills Section - Two Columns */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Design Skills */}
          <motion.div
            className="bg-gradient-to-br from-card via-card/80 to-muted/20 p-8 rounded-2xl border border-border/50 backdrop-blur-sm relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(155, 127, 212, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-2xl mb-8 text-foreground relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Design Skills
            </motion.h3>
            
            <div className="space-y-6 relative z-10">
              {designSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} delay={0} />
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            className="bg-gradient-to-br from-card via-card/80 to-muted/20 p-8 rounded-2xl border border-border/50 backdrop-blur-sm relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(155, 127, 212, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-2xl mb-8 text-foreground relative z-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Development Skills
            </motion.h3>
            
            <div className="space-y-6 relative z-10">
              {developmentSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} delay={0.3} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl text-center"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technologies I work with
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  boxShadow: "0 10px 25px rgba(155, 127, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  backgroundColor: { duration: 0.2 },
                  color: { duration: 0.2 }
                }}
                className="relative overflow-hidden"
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 cursor-default relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                    initial={{ x: -100, opacity: 0 }}
                    whileHover={{ x: 100, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{tech}</span>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}