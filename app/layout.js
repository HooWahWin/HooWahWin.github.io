"use client";

import { Poppins } from "next/font/google";
import { createContext } from "react";
import { useState } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en">
      <title>hoa nguyen | personal portfolio</title>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <body className={poppins.className + " " + (darkMode ? "scrollbar" : "scrollbar-light")}>{children}</body>
      </ThemeContext.Provider>
    </html>
  );
}
