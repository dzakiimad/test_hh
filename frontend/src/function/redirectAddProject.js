"use server"

import { redirect } from "next/navigation";

export async function redirectAddProject() {
    await redirect('/addProject')
}