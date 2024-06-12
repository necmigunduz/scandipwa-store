import ModeToggleButtonComponent from "../component/ModeToggleButton/ModeToggleButton.component";

import "./Header.style.plugin";

export const renderTopMenu = (args, callback, instance) => {
    return (
        <>
            <ModeToggleButtonComponent />
            {callback(...args)}
        </>
    );
};

export default {
    "Component/Header/Component": {
        "member-function": {
            renderTopMenu,
        },
    },
};