"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ActivityFeed } from "@/components/ActivityFeed";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <ActivityFeed />
        <About />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
