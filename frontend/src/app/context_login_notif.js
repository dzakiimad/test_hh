'use client'

import Navbar from '@/components/navbar';
import Notification from '@/components/notification';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react'
export const Context = createContext();

    
export const Provider = ({ children }) => {

    const [showNotification, setShowNotification] = useState({
        status: false,
        message: "",
        color: ""
      })

    const showSuccessNotification = (attributes) => {
        setShowNotification({
          status: attributes.status,
          message: attributes.message,
          color: attributes.color
        });
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
    }

    const path = usePathname()
    const router = useRouter()
    
    const [isLogin, setIsLogin] = useState(false);
    const checkLoginStatus = () => {
        const token = localStorage.getItem('access_token');
        if(token == "undefined" || token == "null" || token == undefined || token == null) {setIsLogin(false); return router.replace('/login') }
        if((token != "undefined" || token != "null" || token != undefined || token != null) && path == "/login") {setIsLogin(true) ; return router.replace('/') }
    }
  
    useEffect(() => {
        checkLoginStatus()
    }, [isLogin]);

    
    return (
        <Context.Provider value={{showNotification, showSuccessNotification, checkLoginStatus}}>
          {/* { loading ? 
            <Loading/>
            : */}

            <>
                <Notification/>
                <div className={"min-h-screen relative bg-backgroundPage"}>
                <Navbar />
                {children}
                </div>
             </>
          {/* } */}



        </Context.Provider>
    );
}