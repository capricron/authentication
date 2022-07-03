import React, {useState} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [success, setSuccess] = useState("");

    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    }
    
    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password
        }

        axios.post("http://localhost:8000/register", data)
        .then(res => {
            if(res.data){
                setSuccess(res.data.message);
                setUsername("");
                setEmail("");
                setPassword("");
                setTimeout(() => {
                    setSuccess("");
                }, 3000);
            }
        }).catch(err => {
            setAlert(err.response.data.message);
            setTimeout(() => {
                setAlert("");
            }, 3000);
        })
    }

    

    return (
        <div className={'container '} style={{marginTop : "25vh"}}>
            <div className={'row justify-content-center'} >
            <div className={'col-md-6'}>
                <div className={'card'}>
                <div className={'card-header'}>
                    <h3 className={'text-center'}>Register Page</h3>
                    {
                        alert ? <div className="alert alert-danger" role="alert">{alert}</div> : null
                    }
                    {
                        success ? <div className="alert alert-success" role="alert">{success}</div> : null
                    }
                    <div className={'card-body'}>
                        <form>                        
                            <div className={'form-group'}>
                                <label htmlFor={'username'}>Username</label>
                                <input type={'username'} className={'form-control'} id={'username'} value={username} onChange={onChangeUsername} />
                            </div>
                            <br/>
                            <div className={'form-group'}>
                                <label htmlFor={'email'}>Email</label>
                                <input type={'email'} className={'form-control'} id={'email'} value={email} onChange={onChangeEmail} />
                            <br/>
                                <label htmlFor={'password'}>Password</label>
                                <input type={'password'} className={'form-control'} id={'password'} value={password} onChange ={onChangePassword} />
                            <br/>
                            <button type={'submit'} className={'btn btn-primary btn-block'} onClick={onSubmit}>Register</button>
                            </div>
                        </form>
                        <div className={"row"}>
                        <div className={"col text-center"}>
                            <h5> Already have an account? &nbsp;
                                <Link to={'/'}>
                                 Login
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

