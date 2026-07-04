"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

interface CaseStudySolutionSectionsProps {
  sections: Project["solutionSections"];
}

export default function CaseStudySolutionSections({
  sections,
}: CaseStudySolutionSectionsProps) {
  return (
    <section className="bg-[#111827] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4">
        {sections.map((section, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`flex flex-col items-center gap-8 lg:flex-row ${
                reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {section.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-700/50 shadow-lg shadow-black/20 lg:w-1/2">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div className={section.image ? "w-full lg:w-1/2" : "w-full"}>
                <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
                  {section.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  {section.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
