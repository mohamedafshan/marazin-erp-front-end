import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const SideBarData = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={faHome} />, // Use the imported icon
        link: '/home'
    },
    {
        title: "Dummy",
        icon: <FontAwesomeIcon icon={faInfoCircle} />, // Use the imported icon
        link: '/dummy2'
    },
];
