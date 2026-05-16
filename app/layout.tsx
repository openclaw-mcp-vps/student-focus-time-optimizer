import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusFlow – Optimize Study Sessions for Maximum Focus",
  description: "Track focus patterns and get personalized study session recommendations. Built for students, tutors, and educational coaches."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33809546-fe49-4a3d-b635-fdff4ca1b3f5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
