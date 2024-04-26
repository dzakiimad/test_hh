'use client'

import { Context } from "@/app/context_login_notif";
import { redirectAddProject } from "@/function/redirectAddProject";
import { useContext, useEffect, useState } from "react";
import Notification from "./notification";
import { FetchDataContext } from "@/app/context_fecthData";
import { handleAddActivity } from "@/function/handleAddActivity";
import { handleEditActivity } from "@/function/handleUpdateActivity";

export default function ModalActivity({ edit, fetchDataActivity, dataProject }) {
    const { showSuccessNotification } = useContext(Context)
    const {activity, setActivity} = useContext(FetchDataContext)

    const [input, setInput] = useState({
        id: "",
        judul: "",
        project_id: "",
        tanggal_mulai: "",
        tanggal_berakhir: "",
        jam_mulai: "",
        jam_berakhir: ""
    });

    const [close, setClose] = useState(false)
 
    useEffect(() => {
        setInput({
            id: activity?.id ?? "",
            judul: activity?.judul ?? "",
            project_id: dataProject.find(e => e.name == activity?.project)?.id ?? "",
            tanggal_mulai: (activity?.tanggal_mulai)?.slice(0, 10) ?? "",
            tanggal_berakhir: (activity?.tanggal_berakhir)?.slice(0, 10)?? "",
            jam_mulai: activity?.jam_mulai ?? "",
            jam_berakhir: activity?.jam_berakhir?? ""
        })
    },[activity])

    const submit = async (e) => {
        e.preventDefault()
        handleAddActivity(input, showSuccessNotification, fetchDataActivity)
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        handleEditActivity(input, showSuccessNotification, fetchDataActivity)
    }
    return (
        <>
            <div className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8">
                <form method="dialog" className="flex justify-end">
                    <button onClick={() => {setActivity([])
                    setClose(!close)}} className="btn bg-white ">X</button>
                </form>
                <form method="dialog" className="" onSubmit={edit != "true" ? (e) => submit(e) : (e) => handleEdit(e)}>
                    <div className="text-xl text-black font-bold mb-4 text-center">Add Activity</div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="judul"
                        >
                            Judul
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="judul"
                            type="text"
                            value={input.judul}
                            onChange={(e) => setInput({ ...input, judul: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="project"
                        >
                            Project
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="project"
                            type="dropdown"
                            value={input.project_id}
                            onChange={(e) => {
                                if (e.target.value == "+") return redirectAddProject()
                                return setInput({ ...input, project_id: e.target.value })
                            }}
                        >
                            <option value={""}>-- Select Project --</option>
                            {dataProject?.map(e =>
                                <option key={e.id} value={e.id}>{e.name}</option>
                            )}
                            <option value={"+"}>+ Tambah Project</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="tanggal_mulai"
                        >
                            Tanggal Mulai
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tanggal_mulai"
                            type="date"
                            value={input.tanggal_mulai}
                            onChange={(e) => setInput({ ...input, tanggal_mulai: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="tanggal_berakhir"
                        >
                            Tanggal Berakhir
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tanggal_berakhir"
                            type="date"
                            value={input.tanggal_berakhir}
                            onChange={(e) => setInput({ ...input, tanggal_berakhir: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="jam_mulai"
                        >
                            Jam Mulai
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="jam_mulai"
                            type="time"
                            value={input.jam_mulai}
                            onChange={(e) => setInput({ ...input, jam_mulai: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="jam_berakhir"
                        >
                            Jam Berakhir
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="jam_berakhir"
                            type="time"
                            value={input.jam_berakhir}
                            onChange={(e) => setInput({ ...input, jam_berakhir: e.target.value })}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        
                        <button
                        className="btn w-full bg-blue hover:bg-backgroundPage hover:text-blue text-white font-bold py-2 px-4 mt-4 rounded"
                        type="submit"
                        >
                            {edit != "true" ? "Tambah":"Edit"}
                        </button>
                    </div>
                </form>
                <Notification />
            </div>
        </>
    )
}