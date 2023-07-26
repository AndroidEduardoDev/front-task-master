import "@/app/globals.css"
import "@/app/css/login.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import React, { useState } from "react"
import { handleInput } from "@/app/core/repository/handle_input"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import { registerBody, validateRegisterBody } from "@/app/core/repository/register/register_body"


export default function RecoverPasswordComponent() {
    const [values, setValues] = useState(registerBody)
    return (
        <div className="container-fluid login-bg">
            <div className="row main-wrapper">
                <div className="container-primary col-md-2 offset-md-10">
                    <div className="row">
                        <div className="jumbotron vertical-center">
                            <div className="container">
                                <form>
                                    <InputText hint="Email" id="email" type="email" handleInput={[handleInput, values, setValues]} />
                                    <ButtonPrimary text="Recover password" callBack={() => {
                                        alert(validateRegisterBody(values))
                                    }} />
                                    <Link className="text-white text-center" href={"/login"}>
                                        <p className="mg-t-5">Login</p>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}