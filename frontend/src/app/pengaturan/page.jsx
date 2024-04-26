'use client'
import FormUpdateUser from "@/components/form_update_user"
import { useEffect, useState } from "react";

export default function Pengaturan({user,setUser}) {

  return (

    <>
      <FormUpdateUser user={user} setUser={setUser} />
    </>

  )
}