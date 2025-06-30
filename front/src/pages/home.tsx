import { Button } from "primereact/button";
import Logo from "../components/inc/Logo";

import promo from "../assets/promo.png";

const Homepage = () => {
    return (
        <div className="px-16 py-4">
            <header className="flex justify-between items-center">
                <Logo />
                <Button
                    label="Sign in"
                    className="!-mt-2 !px-8 !bg-primary"
                />
            </header>

            <main className="mt-3 grid grid-cols-2 gap-16 items-center">
                <div>
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
                    />
                </div>

                <div>
                    <img 
                        src={promo}
                    />
                </div>
            </main>

            <footer className="flex justify-end items-end">
                <div>
                    
                </div>
            </footer>
        </div>
    )
};

export default Homepage;