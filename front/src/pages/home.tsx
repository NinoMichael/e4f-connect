import { Button } from "primereact/button";
import Logo from "../components/inc/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

import promo from "../assets/promo.png";

const Homepage = () => {
    const navigateTo = useNavigate();
    const { isAuthenticated, hasRole } = useAuth();

    const handleRedirect = () => {
        if ( isAuthenticated() ) {
            if ( hasRole('member') ) {
                navigateTo('/member/dashboard');
            } else {
                navigateTo('/manager/dashboard');
            }
        }
        else {
            navigateTo('/login');
        }
    }

    return (
        <div className="bg-white px-8 md:px-16 py-4 h-screen flex flex-col justify-between">
            <header className="flex justify-between items-center">
                <Logo />
                <Button
                    label={ isAuthenticated() ? 'Go to workspace' : 'Sign in' }
                    className="sm:!-mt-2 !px-8 !bg-primary"
                    onClick={handleRedirect}
                />
            </header>

            <main className="mt-10 md:mt-3 grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 text-center md:text-start  md:order-1">
                    <h1 className="text-3xl font-semibold text-primary">
                        Welcome to <span className=" text-4xl font-bold text-secondary font-nunito">E4F Connect</span>,
                        the revolution of learning English in a club!
                    </h1>

                    <p className="mt-5 text-base"> 
                        Learn and communicate easily in English in a collaborative and stimulating environment. Progress together, communicate without barriers, and experience each session with enthusiasm.
                    </p>

                    <Button 
                        label="Get started"
                        className="!bg-primary !text-base !font-semibold !px-12 !py-3 !mt-8"
                        onClick={handleRedirect}
                    />
                </div>

                <div className="order-1 md:order-2">
                    <img 
                        src={promo}
                    />
                </div>
            </main>

            <footer className="mt-20 md:mt-24">
                <p className="text-center md:text-end text-xs mb-8 md:mb-0">
                    Copyright © { new Date().getFullYear() } - All rights reserved
                </p>
            </footer>
        </div>
    )
};

export default Homepage;