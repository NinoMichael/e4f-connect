import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import Logo from "../components/inc/Logo";

import { login } from "../services/authService";

import club from "../assets/club.jpg";

const Login = () => {
    const navigateTo = useNavigate();
    const [checked, setChecked] = useState(false);
    const [ identifier, setIdentifier ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

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
        <div className="h-screen grid lg:grid-cols-2">
            <section className="bg-primary hidden lg:block">
                <img 
                    src={club}
                    className="w-[65%] rounded-lg mt-28 flex justify-center mx-auto items-center" 
                />
                <p className="mt-12 text-white italic font-semibold flex text-center w-96 justify-center mx-auto items-center">
                    "Learn and communicate easily in English in a collaborative and stimulating environment. Progress together, communicate without barriers, and experience each session with enthusiasm."
                </p>
            </section>

            <section className="bg-white p-12">
                <form onSubmit={handleLogin}>
                    <Logo className="text-center w-36 mx-auto"/>

                    <h1 className="text-2xl font-nunito font-bold text-center">
                         Welcome back !
                    </h1>

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
    )
};

export default Login