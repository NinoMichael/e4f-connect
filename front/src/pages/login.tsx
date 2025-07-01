import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import Logo from "../components/inc/Logo";  

import club from "../assets/club.jpg";

const Login = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="h-screen grid lg:grid-cols-2">
            <section className="bg-primary hidden lg:block">
                <img 
                    src={club}
                    className="w-[65%] rounded-lg mt-24 flex justify-center mx-auto items-center" 
                />
            </section>

            <section className="bg-white p-12">
                <form>
                    <Logo className="text-center w-36 mx-auto"/>

                    <h1 className="text-2xl font-nunito font-bold text-center">
                         Welcome back !
                    </h1>

                    <p className="mt-2 text-center">
                        Enter your identifier and password to access your account
                    </p>

                    <div className="mt-12 md:px-20 space-y-10 w-full flex flex-col justify-center mx-auto">
                        <FloatLabel>
                            <InputText id="identifier" className="!w-full"/>
                            <label htmlFor="identifier">Identifier</label>
                        </FloatLabel>

                        <FloatLabel>
                            <Password id="password" className="!w-full"/>
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

                    <div className="flex justify-center lg:mx-20">
                        <Button
                            label="Sign in"
                            className="!bg-secondary !mt-16 !w-full"
                        />
                    </div>
                </form>
            </section>
        </div> 
    )
};

export default Login