import React, { useContext } from "react";
import { ThemeContext } from "../../Custom Hooks/ThemeContext";
import ThemeSwitcher from "../Theme Switcher/ThemeSwitcher";
import './Header.css'

export default function Header({ colour, setColour }) {
  const theme = useContext(ThemeContext);
  const className = 'header-' + theme;
  return (
    <header className={className}>
      <h1>Cat App</h1>
      <ThemeSwitcher colour={colour} setColour={setColour} />
    </header>
  );
}
