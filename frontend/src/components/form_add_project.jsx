'use client'

import { Context } from "@/app/context_login_notif";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function FormAddProject() {

    const [input, setInput] = useState({
        name: "",
    });

    const route = useRouter()

    const { showSuccessNotification } = useContext(Context)
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch('http://localhost:3000/projects', {
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
            console.log(error);
        }
       
    }
    return (
        <>
            <div className="w-full flex justify-center items-center items-center absolute my-[250px]">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Project Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            onChange={(e) => setInput({ ...input, name: e.target.value })}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="btn"
                            type="submit"
                        >
                            Tambah
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}