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
        <div className="w-full my-[250px] flex items-center justify-center">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>submit(e)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 flex justify-start"
                            htmlFor="email"
                        >
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 flex justify-start"
                            htmlFor="password"
                        >
                            Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button type='submit' text='Masuk' color='blue' />
                    </div>
                </form>
            </div>
        </div>

    )
}