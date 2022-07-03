import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[alert, setAlert] = useState("");

    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    }

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            username,
            password
        }

        axios.post("http://localhost:8000/login", data)
        .then(res => {
            if(res.data){
                localStorage.setItem("token", res.data.token);
                window.location.href = "/dashboard";
            }
        }
        ).catch(err => {
            console.log(err);
            setAlert(err.response.data.message);
            setTimeout(() => {
                setAlert("");
            }, 3000);
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            window.location.href = "/dashboard";
        }
    },[]);

    return(
        <div className={'container '} style={{marginTop : "25vh"}}>
            <div className={'row justify-content-center'} >
                <div className={'col-md-6'}>
                    <div className={'card'}>
                        <div className={'card-header'}>
                            <h3 className={'text-center'}>Login Page</h3>
                            {
                                alert ? <div className="alert alert-danger" role="alert">{alert}</div> : null
                            }
                            <div className={'card-body'}>
                                <form>
                                    <div className={'form-group'}>
                                        <label htmlFor={'email'}>Email</label>
                                        <input type={'email'} className={'form-control'} id={'email'} value={username} onChange={onChangeUsername} />
                                        <br/>
                                        <label htmlFor={'password'}>Password</label>
                                        <input type={'password'} className={'form-control'} id={'password'} value={password} onChange ={onChangePassword} />
                                        <br/>
                                        <button type={'submit'} className={'btn btn-primary btn-block'} onClick={onSubmit}>Login</button>
                                    </div>
                                </form>
                                <div className={"row"}>
                                    <div className={"col text-center"}>
                                    <h5>Don't have an account? &nbsp;                                    
                                        <Link to={'/register'}>
                                            Register
                                        </Link>
                                    </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
