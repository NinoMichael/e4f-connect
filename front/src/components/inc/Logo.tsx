import type React from "react";
import logo from "../../assets/logo.png";

type LogoProps = {
    className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "w-36" }) => {
    return (
        <img
            src={logo}
            className={className} 
        />
    )
};

export default Logo;