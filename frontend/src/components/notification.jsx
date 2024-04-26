"use client"

import { Context } from "@/app/context_login_notif"
import { useContext } from "react"

export default function Notification() {
    const {showNotification} = useContext(Context)
    return (
        <>
        {showNotification.status && (
            <div className="fixed inset-0 flex mb-10 items-end justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none z-[1000]">
              <div className={`relative h-14 w-fit ${showNotification.color == "red" ? "bg-red" : "bg-green-400"} border border-white text-white px-4 py-3 rounded-md`}>
                <span className="block sm:inline font-bold">{showNotification?.message}</span>
              </div>
            </div>)}
        </>
        )
          
    
}
