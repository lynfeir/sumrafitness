import type { Metadata } from "next";
import { Poppins, Roboto, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Baasit Sumra Fitness - Transform Your Body & Mind",
  description:
    "Professional training in strength, speed, yoga, soccer, and martial arts including Muay Thai, Taekwondo, and Jiu Jitsu. 500+ clients trained, 8 years experience.",
  keywords:
    "fitness, training, strength, speed, yoga, soccer, martial arts, Muay Thai, Taekwondo, Jiu Jitsu, personal trainer",
  authors: [{ name: "Baasit Sumra" }],
  openGraph: {
    title: "Baasit Sumra Fitness - Transform Your Body & Mind",
    description:
      "Professional training in strength, speed, yoga, soccer, and martial arts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${poppins.variable} ${roboto.variable} ${orbitron.variable} font-sans antialiased bg-navy text-white`}
      >
        {children}
      </body>
    </html>
  );
}
