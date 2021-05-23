import React from "react";
import {Bar, LinkUI} from "../../GlobalStyles"
import {useParams} from "react-router-dom";

const NavigationContent = () => {
    const {title} = useParams();
    return (
        <Bar>
            <p>
                <LinkUI to="/">Home</LinkUI> <span>|</span> {title}
            </p>
        </Bar>
    )
};

export default NavigationContent;