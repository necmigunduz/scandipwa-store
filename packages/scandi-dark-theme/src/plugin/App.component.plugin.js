import React, { useState, startTransition } from "react";
import DarkModeProvider from "../component/DarkModeProvider/DarkModeProvider.component";
import App from "@scandipwa/scandipwa/src/component/App";
import ModeToggleButtonComponent from "../component/ModeToggleButton/ModeToggleButton.component";

const ParentComponent = (props) => {
  return props.callback(...props.args);
};

const AppContainer = ({ args, callback, __instance }) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkModeEnabled;

    startTransition(() => {
      setIsDarkModeEnabled(newMode);
    });
  };

  return (
    <>
      <DarkModeProvider isDarkModeEnabled={isDarkModeEnabled}>
      <ModeToggleButtonComponent
          isDarkModeEnabled={isDarkModeEnabled}
          enableDarkMode={toggleDarkMode}
        />
        <ParentComponent args={args} callback={callback} __instance={__instance} />
        
      </DarkModeProvider>
    </>
  );
};

export const renderRouter = (args, callback, __instance) => {
  console.log("AppContainer is being rendered");
  return <AppContainer args={args} callback={callback} __instance={__instance} />;
};

export default {
  "Component/App/Component": {
    "member-function": {
      renderRouter,
    },
  },
};
