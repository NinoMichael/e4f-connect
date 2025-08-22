
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useAuth } from "../../context/Auth";
import { useRedirect } from "../../hooks/helpers/useRedirect";

import uk from '../../assets/uk.jpg';
import usa from '../../assets/usa.jpg';
import { Link } from "react-router-dom";

const Header = () => {
    const { isAuthenticated } = useAuth();
    const handleRedirect = useRedirect();
    const [ visible, setVisible ] = useState(false);

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
            items: []
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
        {
            label: 'Support',
            items: [
                {
                    label: 'Contact',
                    url: '/',
                },
                {
                    label: 'FAQs',
                    url: '/',
                },
            ]
        },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white">
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

            <div className="flex px-4 sm:px-12 justify-between items-center">
                <div className="flex gap-6 items-center">
                    <Logo />

                    <Menubar 
                        model={menuItems}
                        className="!hidden lg:!block"
                    />
                </div>

                <div className="flex gap-3 sm:gap-6 items-center sm:items-start">
                    <Button
                        label={ isAuthenticated() ? 'Workspace' : 'Sign in' }
                        className="sm:!-mt-2 !px-8 !bg-primary !rounded-full"
                        onClick={handleRedirect}
                    />

                    <div className="lg:!hidden">
                        <Button 
                            icon="pi pi-bars" 
                            onClick={() => setVisible(true)}
                            className="!bg-transparent !text-gray-700 !p-0" 
                        />

                        <Sidebar 
                            visible={visible}
                            position="right"
                            className="!bg-primary !text-white !m-0 -pt-8 !w-64 !overflow-hidden" 
                            onHide={() => setVisible(false)}
                            pt={{
                                header: { className: '!p-0' },
                                closeButton: { className: '!text-white' },
                                content: { className: '!overflow-hidden' },
                            }}
                        >
                            <Menu 
                                model={menuItems} 
                                className="!bg-transparent !text-white -mt-2"
                                pt={{
                                    menu: { className: '!text-white' },
                                    submenuHeader: { className: '!bg-transparent !font-bold !text-white' },
                                    label: { className: '!text-white' },
                                    icon: { className: '!text-white' },
                                    menuitem: { className: '!ml-4' },
                                }}
                            />

                            <div className="mt-2 flex gap-4 items-center">
                                <Link 
                                    to="/"
                                    className="hover:scale-105 transform ease-in-out duration-300"
                                    title="Facebook page"
                                >
                                    <div className="bg-white/10 w-10 p-2 rounded-full text-center text-white">
                                        <i className="pi pi-facebook !text-lg" />
                                    </div>
                                </Link>

                                <Link 
                                    to="/"
                                    className="hover:scale-105 transform ease-in-out duration-300"
                                    title="Send an email"
                                >
                                    <div className="bg-white/10 w-10 p-2 rounded-full text-center text-white">
                                        <i className="pi pi-envelope !text-lg" />
                                    </div>
                                </Link>
                            </div>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;