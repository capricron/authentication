import React, {useEffect, useState} from "react";

import axios from "axios";

export const Dashboard = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token){
            window.location.href = "/";
        }else{
            axios.get("http://localhost:8000/user", {
                headers: {
                    "Authorization": token
            }
            }).then(res => {
                setUser(res.data.user);
            }).catch(err => {
                localStorage.removeItem("token");
                window.location.href = "/";
            }
            )
        }
    })  


    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h1>Dashboard</h1>
            <p>Welcome {user.username}</p>
            </div>
        </div>
        </div>
    );
}