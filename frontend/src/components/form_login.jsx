'use client'
import { Context } from "@/app/context_login_notif";
import { useContext, useState } from "react";
import Button from "./button";
import { handleLogin } from "@/function/handleLogin";


export default function FormLogin() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    const { showSuccessNotification } = useContext(Context)
    const { checkLoginStatus } = useContext(Context)


    const submit = (e) => {
        e.preventDefault();
        handleLogin(email, password, showSuccessNotification, checkLoginStatus)
    }

    return (
        <div className="flex h-full justify-center items-center">
            <div className="w-72 h-72">
                <form className="flex flex-col justify-between bg-white shadow-md rounded w-full h-full p-8" onSubmit={(e) => submit(e)}>
                    <div className="flex flex-col gap-4">
                        <div className="">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 flex justify-start"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                className="shadow border rounded w-full py-2 px-3 text-black focus:outline-none  bg-white"
                                id="email"
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 flex justify-start"
                                htmlFor="password"
                            >
                                Password:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button type='submit' text='Masuk' color='blue' />
                    </div>
                </form>
            </div>
        </div>
    )
}