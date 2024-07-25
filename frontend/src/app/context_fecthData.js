'use client'

import { createContext, useContext, useState } from 'react'
import { Context } from './context_login_notif';

export const FetchDataContext = createContext();


export const FetchDataProvider = ({ children }) => {
  const { showSuccessNotification } = useContext(Context)

  const [user, setUser] = useState({
    name: "",
    rate_perjam: ""
  });
  const fetchDataUser = async () => {
    try {
      const response = await fetch('https://test-hh-pi.vercel.app/activities', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        cache: 'no-store',
      })
      const prod = await response.json()

      setUser({
        name: prod?.user?.name,
        rate_perjam: prod?.user?.rate_perjam
      })
    } catch (error) {
      showSuccessNotification({
        status: true,
        message: 'Terjadi kesalahan',
        color: 'red'
      })
    }
  }

  const [dataActivity, setDataActivity] = useState([]);

  const fetchDataActivity = async () => {
    try {
      const response = await fetch('https://test-hh-pi.vercel.app/activities', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        cache: 'no-store',
      })
      const prod = await response.json()
      setDataActivity(prod)
    } catch (error) {
      showSuccessNotification({
        status: true,
        message: 'Terjadi kesalahan',
        color: 'red'
      })
    }

  }

  const [dataProject, setDataProject] = useState([]);

  const fetchDataProject = async () => {
    try {
      const response = await fetch('https://test-hh-pi.vercel.app/projects', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: 'no-store',
      })
      const prod = await response.json()
      setDataProject(prod.data)
    } catch (error) {
      showSuccessNotification({
        status: true,
        message: 'Terjadi kesalahan',
        color: 'red'
      })
    }

  }

  const [activity, setActivity] = useState([]);

  const fetchActivity = async (id) => {
    try {
      const response = await fetch('https://test-hh-pi.vercel.app/activities/' + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        cache: 'no-store',
      })
      const prod = await response.json()
      setActivity(prod[0])
    } catch (error) {
      showSuccessNotification({
        status: true,
        message: 'Terjadi kesalahan',
        color: 'red'
      })
    }

  }

  return (
    <FetchDataContext.Provider value={{ user, fetchDataUser, dataActivity, fetchDataActivity, dataProject, fetchDataProject, activity, fetchActivity, setActivity }}>
      <>
        {children}
      </>
    </FetchDataContext.Provider>
  );
}