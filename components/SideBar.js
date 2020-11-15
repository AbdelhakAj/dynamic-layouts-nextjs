import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const SideBar = ({}) => {
    const [allUsers, setAllUsers] = useState([])
    const router = useRouter()

    useEffect(() => {
        (async function getCountries() {
            const response = await fetch('https://5e78fa39491e9700162de71b.mockapi.io/api/users')
            const allUsers = await response.json()
            setAllUsers(allUsers)
          })();
    }, []);

    return (
        <div>
            <h2> users </h2>
            {allUsers.map((u) => 
                <p key={u.id} onClick={() => router.push(`/users/${u.id}`)}>{u.name}</p> 
            )}
        </div>
    )
}


export default SideBar;