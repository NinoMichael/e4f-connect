import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import Logo from "../components/inc/Logo";
import { motion } from "framer-motion";

import { login } from "../services/authService";

import mobileView from "../assets/mobile-view.png";
import uk from '../assets/uk.jpg';
import usa from '../assets/usa.jpg';

const Login = () => {
    const navigateTo = useNavigate();
    const [checked, setChecked] = useState(false);
    const [ identifier, setIdentifier ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const images = [uk, usa];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const formData = {
            identifier: identifier,
            password: password
        };

        setLoading(true);

        try {
            const response = await login(formData);
            
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.role));

            if (response.data.role.user.role == 'member') {
                navigateTo('/member/dashboard');
            }
            else if (response.data.role.user.role == 'manager') {
                navigateTo('/manager/dashboard');
            }
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="w-full relative">
                <div className="lg:hidden top-0 sticky z-50 h-12 overflow-hidden">
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
            </div>

            <div className="h-screen grid lg:grid-cols-2">
                <section className="bg-primary hidden lg:block">
                    <motion.div 
                        className="mt-8 ml-16 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-nunito font-semibold text-2xl">
                            E4F-CONNECT
                        </h1>
                        <p className="mt-3 text-lg">
                            Let's learn English with fun !
                        </p>
                    </motion.div>

                    <motion.img 
                        src={mobileView}
                        className="w-full rounded-lg mt-12 flex justify-center mx-auto items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} 
                    />
                </section>

                <section className="bg-white px-12 md:p-12 lg:mt-0">
                    <form onSubmit={handleLogin}>
                        <Logo className="text-center w-36 mx-auto"/>

                        <h2 className="text-2xl font-nunito font-bold text-center">
                            Welcome back !
                        </h2>

                        <p className="mt-2 text-center">
                            Enter your identifier and password to access your account
                        </p>

                        <div className="mt-12 md:px-20 space-y-10 w-full flex flex-col justify-center mx-auto">
                            <FloatLabel>
                                <InputText
                                    id="identifier"
                                    className="!w-full"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value) }
                                />
                                <label htmlFor="identifier">Identifier</label>
                            </FloatLabel>

                            <FloatLabel>
                                <Password 
                                    id="password" 
                                    className="!w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value) }
                                />
                                <label htmlFor="password">Password</label>
                            </FloatLabel>
                        </div>

                        <div className="flex justify-between text-xs items-center mt-6 md:px-20">
                            <div className="flex space-x-2 items-center">
                                <Checkbox 
                                    id="remember"
                                    checked={checked}
                                    onChange={(e) => setChecked(e.checked ?? false)}
                                />
                                <label htmlFor="remember"> 
                                    Remember me
                                </label>
                            </div>

                            <a className="underline underline-offset-2">
                                Forgotten password ?
                            </a>
                        </div>

                        <div className="flex justify-center md:mx-20">
                            <Button
                                label="Sign in"
                                className="!bg-secondary !mt-16 !w-full"
                                loading={loading}
                            />
                        </div>
                    </form>
                </section>
            </div> 
        </>
    )
};

export default Login