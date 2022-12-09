import React from "react";
import ThemeSwitcher from "../Theme Switcher/ThemeSwitcher";
import './Header.css'

export default function Header() {
  return (
    <header>
      <div>Cat App</div>
      <ThemeSwitcher />
    </header>
  );
}
