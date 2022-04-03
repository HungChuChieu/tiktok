import { useContext } from "react";
import Context from "./context";
import { ThemeContext } from "./ThemeContext";

function App  ()  {
    const context = useContext(ThemeContext)
  return ( 
      <div style={{ padding: 20 }}>
        <button onClick={context.handleChangeTheme}>Change Theme</button>
        <Context />
      </div> 
  );
};

export default App;
