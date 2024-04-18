/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { cinzel } from "@/utils/fonts";
import { getSession, session } from "@/utils/types";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function page() {
    const [session, setSession] = useState<session | null>()
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSession(getSession())
            if (session === null) {
                setSession(null)
            }else{
                setSession(getSession())
            }
        }, 1000);
        return () =>
            clearInterval(interval)
    }, [session]);


return (<div className="w-1/3 h-1/3 bg-zinc-800 flex flex-col  text-start justify-center pl-5 self-center">{
    session != null ?
        <>
            <h2 className={`text-white text-3xl ${cinzel.className}`}>Username: <span className="text-green-400">{session.user.username}</span></h2>
            <h2 className={`text-white text-3xl ${cinzel.className}`}>Email: <span className="text-bold text-green-400">{session.user.email}</span></h2>
            <h2 className={`text-white text-3xl ${cinzel.className}`}>Token: <span className="text-bold text-green-400">{session.user.token!}</span></h2>
            
        </>
        :
        <>
            <p>Not logged in</p>
        </>
        
}</div>
)

}