"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiSolidity, 
  SiEthereum,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiPython,
  SiCplusplus,
  SiFramer,
  SiShadcnui,
  SiVisualstudiocode
} from "react-icons/si";

const tools = [
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]", category: "Frontend" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white", category: "Frontend" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "text-[#06B6D4]", category: "Frontend" },
  { name: "Solidity", Icon: SiSolidity, color: "text-[#363636]", category: "Web3" },
  { 
    name: "Remix IDE", 
    customIcon: "/remix.png", 
    color: "text-purple-500", 
    category: "Web3" 
  },
  { name: "Ethers.js", Icon: SiEthereum, color: "text-[#627EEA]", category: "Web3" },
  { name: "Python", Icon: SiPython, color: "text-[#3776AB]", category: "Programming" },
  { name: "C++", Icon: SiCplusplus, color: "text-[#00599C]", category: "Programming" },
  { name: "Figma", Icon: SiFigma, color: "text-[#F24E1E]", category: "Design" },
  { name: "Illustrator", Icon: SiAdobeillustrator, color: "text-[#FF9A00]", category: "Design" },
  { name: "Framer Motion", Icon: SiFramer, color: "text-[#3776AB]", category: "Animation" },
  { name: "Shadcn", Icon: SiShadcnui, color: "text-[#3776AB]", category: "Frontend" }
];

export function Tools() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Tech Stack</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="tools-card p-6 flex flex-col items-center justify-center gap-4 group"
            >
              {tool.customIcon ? (
                <div className="relative w-12 h-12">
                  <Image
                    src={tool.customIcon}
                    alt={tool.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              ) : (
                <tool.Icon className={`w-12 h-12 ${tool.color} transition-transform group-hover:scale-110`} />
              )}
              <span className="font-medium">{tool.name}</span>
              <span className="text-sm text-gray-400">{tool.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 