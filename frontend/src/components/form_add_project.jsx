'use client'

import { Context } from "@/app/context_login_notif";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Button from "./button";

export default function FormAddProject() {

    const [input, setInput] = useState({
        name: "",
    });

    const route = useRouter()

    const { showSuccessNotification } = useContext(Context)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch('https://test-hh-pi.vercel.app/projects', {
                method: 'POST',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input)
            });
            const prod = await response.json()
            if (!!response.ok) {
                showSuccessNotification({
                    status: true,
                    message: 'Success add project',
                    color: 'green'
                })
            }
            route.replace("/")
        } catch (error) {
            showSuccessNotification({
                status: true,
                message: 'Terjadi kesalahan',
                color: 'red'
            })
        }

    }
    return (
        <>
            <div className="flex h-full justify-center items-center">
                <div className="w-72 h-fit">
                    <form className="flex flex-col justify-between bg-white shadow-md rounded w-full h-full p-8" onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Project Name
                            </label>
                            <input
                                className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                onChange={(e) => setInput({ ...input, name: e.target.value })}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button type="submit" color="blue" text="Tambah"
                            >
                                Tambah
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}