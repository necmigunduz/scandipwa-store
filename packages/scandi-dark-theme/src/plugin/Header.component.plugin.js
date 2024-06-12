import React, { useState, startTransition } from "react";
import "./Header.style.plugin";

const ParentComponent = (props) => {
    return props.callback(...props.args);
};

const TopMenuContainer = ({ args, callback, __instance }) => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkModeEnabled;

        startTransition(() => {
            setIsDarkModeEnabled(newMode);
        });
    };

    return <ParentComponent args={args} callback={callback} __instance={__instance} />;
};

export const renderTopMenu = (args, callback, __instance) => {
    return <TopMenuContainer args={args} callback={callback} __instance={__instance} block="Header" />;
};

export default {
    "Component/Header/Component": {
        "member-function": {
            renderTopMenu,
        },
    },
};
