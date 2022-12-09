import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function useClassNameConstructor(value) {
    const theme = useContext(ThemeContext);
    const className = `${value}-${theme}`
    return className;
}