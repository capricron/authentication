import React from "react";

export const Login = () => {
    return(
        <div>
            <div className={'container '} style={{marginTop : "25vh"}}>
                <div className={'row justify-content-center'} >
                    <div className={'col-md-6'}>
                        <div className={'card'}>
                            <div className={'card-header'}>
                                <h3 className={'text-center'}>Halaman Login</h3>
                                <div className={'card-body'}>
                                    <form>
                                        <div className={'form-group'}>
                                            <label htmlFor={'email'}>Email</label>
                                            <input type={'email'} className={'form-control'} id={'email'} />
                                            <br/>
                                            <label htmlFor={'password'}>Password</label>
                                            <input type={'password'} className={'form-control'} id={'password'} />
                                            {/* submit */}
                                            <br/>
                                            <button type={'submit'} className={'btn btn-primary btn-block'}>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
