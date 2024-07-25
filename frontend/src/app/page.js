'use client'

import Content from "@/components/content";
import { useContext, useEffect, useState } from 'react';
import { FetchDataContext } from "./context_fecthData";


export default function Home() {

  const { fetchDataActivity, dataActivity, fetchDataProject, dataProject } = useContext(FetchDataContext)

  useEffect(() => {
    fetchDataActivity()
  }, [])


  useEffect(() => {
    fetchDataProject()
  }, [])

  return (
    <>
      <Content dataProject={dataProject} dataActivity={dataActivity} fetchDataActivity={fetchDataActivity} fetchDataProject={fetchDataProject} />
    </>
  )
}
