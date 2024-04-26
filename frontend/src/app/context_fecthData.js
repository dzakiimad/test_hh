'use client'

import { createContext, useState } from 'react'

export const FetchDataContext = createContext();

export const FetchDataProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "",
        rate_perjam: ""
      });
      const fetchDataUser = async () => {
        const response = await fetch('http://localhost:3000/activities', {
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
      }

    const [dataActivity, setDataActivity] = useState([]);

  const fetchDataActivity = async () => {
    try {
      const response = await fetch('http://localhost:3000/activities', {
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
      console.log(error);
    }

  }

  const [dataProject, setDataProject] = useState([]);

  const fetchDataProject = async () => {
    try {
      const response = await fetch('http://localhost:3000/projects', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: 'no-store',
    })
    const prod = await response.json()
    setDataProject(prod.data)
    } catch (error) {
      console.log(error);
    }
    
  }

  const [activity, setActivity] = useState([]);

  const fetchActivity = async (id) => {
    try {
      const response = await fetch('http://localhost:3000/activities/'+ id, {
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
      console.log(error);
    }
    
  }

    return (
        <FetchDataContext.Provider value={{user,fetchDataUser, dataActivity, fetchDataActivity, dataProject, fetchDataProject, activity, fetchActivity, setActivity}}>
            <>
            {children}
            </>
        </FetchDataContext.Provider>
    );
}