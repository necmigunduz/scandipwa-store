import ModeToggleButtonComponent from "../component/ModeToggleButton/ModeToggleButton.component";

import "./Header.style.plugin";

export const renderTopMenu = (args, callback, instance) => {
    return (
        <>
            {callback(...args)}
            <ModeToggleButtonComponent />
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