'use client'
import { Context } from "@/app/context_login_notif";
import { useContext, useState } from "react";
import Button from "./button";
import { handleLogin } from "@/function/handleLogin";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { showSuccessNotification } = useContext(Context)
    const { checkLoginStatus } = useContext(Context)

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleLogin(email, password, showSuccessNotification, checkLoginStatus);
        setLoading(false);
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
                                className="shadow border rounded w-full py-2 px-3 text-black focus:outline-none bg-white disabled:opacity-50"
                                id="email"
                                type="text"
                                placeholder="user@mail.com / user2@mail.com"
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
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
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white disabled:opacity-50"
                                id="password"
                                type="password"
                                placeholder="user / user2"
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        {loading ? (
                            <div className="flex items-center gap-2 text-blue-600">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                <span className="text-sm font-medium">Memuat...</span>
                            </div>
                        ) : (
                            <Button type='submit' text='Masuk' color='blue' />
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
