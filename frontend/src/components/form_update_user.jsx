'use client'

import { Context } from "@/app/context_login_notif";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Button from "./button";
import { FetchDataContext } from "@/app/context_fecthData";
import { handleUpdateUser } from "@/function/handleUpdateUser";
export default function FormUpdateUser() {

    const {user, fetchDataUser} = useContext(FetchDataContext)

    useEffect(() => {
        fetchDataUser()
    },[])

    useEffect(() => {
      setInput(
        {
            name: user.name ?? "",
            rate_perjam: user.rate_perjam?? ""
        }
      )
    },[user])

    const [input, setInput] = useState(
        {
            name: "",
            rate_perjam:""
        }
    );

    const { showSuccessNotification } = useContext(Context)

    const route = useRouter()

    const submit = async (e) => {
        e.preventDefault()
        handleUpdateUser(input, showSuccessNotification, route)
    }
    return (
        <>
            <div className="w-full flex items-center justify-center my-[250px]">
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => submit(e)}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                value={(input?.name) ?? ""}
                                onChange={(e) => setInput({ ...input, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="rate_perjam"
                            >
                                Rate Perjam
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="rate_perjam"
                                type="number"
                                value={input.rate_perjam ?? ""}
                                onChange={(e) => setInput({ ...input, rate_perjam: e.target.value })}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button type="submit" color="blue" text="Simpan" />
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}