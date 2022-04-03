import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return <p className={theme}>Hello, welcome to Context</p>;
};
export default Content;
