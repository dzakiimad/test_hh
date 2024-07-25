'use client'

import { secondsToDhms } from "@/function/timeConvert";
import ModalActivity from "./modal_activity";
import { handleDelete } from "@/function/handleDelete";
import { useContext, useEffect } from "react";
import { FetchDataContext } from "@/app/context_fecthData";

export default function Table({ dataActivity, fetchDataActivity, dataProject }) {

    const { fetchActivity, activity } = useContext(FetchDataContext)

    return (
        <>
            <div className="flex w-full items-center justify-center bg-white">
                <div className="overflow-x-auto">
                    <table className="table table-md">
                        <thead>
                            <tr>
                                <th className="text-black">No.</th>
                                <th className="w-[280px] text-black">Judul</th>
                                <th className="text-black">Project</th>
                                <th className="text-black">Tanggal Mulai</th>
                                <th className="text-black">Tanggal Berakhir</th>
                                <th className="text-black">Jam Mulai</th>
                                <th className="text-black">Jam Berakhir</th>
                                <th className="text-black">Duratisi</th>
                                <th className="text-center text-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataActivity?.map((item, i) => (
                                <tr key={i} className="text-grey">
                                    <td>{i + 1}</td>
                                    <td>{item.judul}</td>
                                    <td>{item.project}</td>
                                    <td>{(item.tanggal_mulai).slice(0, 10)}</td>
                                    <td>{(item.tanggal_berakhir).slice(0, 10)}</td>
                                    <td>{item.jam_mulai}</td>
                                    <td>{item.jam_berakhir}</td>
                                    <td>{secondsToDhms(item.durasi)}</td>
                                    <td className='space-x-2'>
                                        <div className="flex gap-2">
                                            <button className="btn-sm btn-ghost text-sm w-16 bg-base-content text-white" onClick={() => {
                                                fetchActivity(item.id)
                                                return document.getElementById('my_modal_2').showModal()
                                            }}>Edit</button>
                                            <dialog id="my_modal_2" className="modal">
                                                <ModalActivity fetchDataActivity={fetchDataActivity} dataProject={dataProject} edit="true" />
                                            </dialog>
                                            <button className="btn-sm btn-ghost text-sm w-16 bg-warning text-white" onClick={() => handleDelete(item.id, fetchDataActivity)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}