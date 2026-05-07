import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReleaseNotes.ai — Auto-generate beautiful release notes from Git commits",
  description: "Connect GitHub, analyze commits and PRs with AI, and publish structured changelogs in seconds. Built for product managers and engineering leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="79eb4985-b49f-4f2e-8f99-c2f216ec0475"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
