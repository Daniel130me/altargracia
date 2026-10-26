"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";

const courseGroups = {
  "Digital Foundations": [
    "Computer Fundamentals",
    "Digital Literacy",
    "Microsoft Word, Excel & PowerPoint",
    "Professional Email & Online Collaboration",
  ],
  "Design & Marketing": [
    "Digital Marketing",
    "Social Media Management",
    "Graphic Design",
    "UI/UX Design",
    "Content Creation",
  ],
  "Web & Software": [
    "Web Development",
    "Front-End Development",
    "Back-End Development Fundamentals",
    "Software Development Fundamentals",
  ],
  "IT & Infrastructure": [
    "CompTIA A+",
    "CompTIA Security+",
    "Computer Networking",
    "Systems Administration",
    "DevOps Fundamentals",
    "Cloud Computing Fundamentals",
  ],
  "Cybersecurity": [
    "Cybersecurity Fundamentals",
    "Ethical Hacking",
    "Network Security",
    "Security Awareness",
  ],
} as const;

type CourseGroup = keyof typeof courseGroups;
const groupNames = Object.keys(courseGroups) as CourseGroup[];

export function TrainingCourseCatalog() {
  const [selectedGroup, setSelectedGroup] = useState<CourseGroup>(groupNames[0]);
  const courses = useMemo(() => courseGroups[selectedGroup], [selectedGroup]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter courses by subject">
        {groupNames.map((group) => (
          <button
            key={group}
            type="button"
            aria-pressed={selectedGroup === group}
            onClick={() => setSelectedGroup(group)}
            className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${
              selectedGroup === group
                ? "border-ink bg-ink text-white"
                : "border-haze bg-white text-ink hover:border-royal hover:text-royal"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div
        key={selectedGroup}
        className="mt-7 grid gap-x-8 sm:grid-cols-2"
        aria-live="polite"
      >
        {courses.map((course, index) => (
          <Reveal key={course} delay={index * 0.035}>
            <div className="flex items-start gap-3 border-b border-haze py-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <p className="font-medium leading-relaxed text-ink">{course}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-3 rounded-[1.5rem] bg-ink p-6 text-white sm:grid-cols-3 sm:p-7">
        <div className="sm:col-span-3">
          <p className="text-sm font-semibold text-white">
            Every course is available in each of these formats
          </p>
        </div>
        {[
          { title: "Physical", detail: "In-person learning" },
          { title: "Online · Self-paced", detail: "Learn on your schedule" },
          { title: "Online · Instructor-led", detail: "Learn with a live instructor" },
        ].map((format) => (
          <div key={format.title} className="rounded-xl border border-white/15 px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="size-4 text-sky" aria-hidden="true" />
              {format.title}
            </p>
            <p className="mt-1 text-xs text-white/60">{format.detail}</p>
          </div>
        ))}
        <div className="sm:col-span-3">
          <Link
            href="/contact?service=training"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-sky hover:text-white"
          >
            Ask about course options
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
