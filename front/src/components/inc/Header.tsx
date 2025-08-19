
import { Button } from "primereact/button";
import { Menubar } from 'primereact/menubar';
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/Auth";
import { useRedirect } from "../../hooks/helpers/useRedirect";

import uk from '../../assets/uk.jpg';
import usa from '../../assets/usa.jpg';

const Header = () => {
    const { isAuthenticated } = useAuth();
    const handleRedirect = useRedirect();

    const images = [uk, usa];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const menuItems = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'Courses',
            items: [
                {
                    label: 'Topic',
                    url: '/',
                },
                {
                    label: 'Speech',
                    url: '/',
                },
                {
                    label: 'Listening',
                    url: '/',
                },
                {
                    label: 'Writing',
                    url: '/',
                },
                {
                    label: 'Grammar',
                    url: '/',
                },
            ]
        },
        {
            label: 'Schedule',
            items: [
                {
                    label: 'Meeting',
                    url: '/',
                },
                {
                    label: 'Workshop',
                    url: '/',
                },
            ]
        },
    ]

    return (
        <header>
            <div className="relative h-12 w-full overflow-hidden">
                {images.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        alt="English flag"
                        className="h-12 w-full object-cover object-top absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === i ? 1 : 0 }}
                        transition={{ duration: 1.2 }}
                    />
                ))}
            </div>

            <div className="flex px-12 justify-between items-center">
                <div className="flex gap-6 items-center">
                    <Logo />

                    <Menubar model={menuItems}/>
                </div>

                <Button
                    label={ isAuthenticated() ? 'Go to workspace' : 'Sign in' }
                    className="sm:!-mt-2 !px-8 !bg-primary !rounded-full"
                    onClick={handleRedirect}
                />
            </div>
        </header>
    )
}

export default Header;