import React from "react";
import useClassNameConstructor from "../../Custom Hooks/useClassNameConstructor";
import ThemeSwitcher from "../Theme Switcher/ThemeSwitcher";
import './Header.css'

export default function Header({ colour, setColour }) {
  const className = useClassNameConstructor("header")
  return (
    <header className={className}>
      <h1>Cat App</h1>
      <ThemeSwitcher colour={colour} setColour={setColour} />
    </header>
  );
}
