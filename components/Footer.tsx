"use client";

import { useTheme } from "./ThemeProvider";
import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 border-t-2 ${
        theme === "dark"
          ? "bg-dark-card border-dark-border"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div
            className={`font-mono text-sm text-center md:text-left ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <p className="flex items-center gap-2 justify-center md:justify-start">
              © {currentYear} Didula Sri Lakpriya. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`font-mono text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-primary transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
