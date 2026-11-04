import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineering Portfolio | Mechanical Design, Robotics & Sonar",
  description:
    "Mechanical engineering, product development, robotics, mechatronics, PCB integration and underwater sonar research portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
