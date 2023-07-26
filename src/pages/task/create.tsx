import "@/app/globals.css"
import "@/app/css/login.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import React, { useState } from "react"
import { handleInput } from "@/app/core/repository/handle_input"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import { taskModel } from "@/pages/home"
import { httpPost } from "@/app/core/http-request-contract"
import { error } from "console"

export default function CreateTaskComponent() {
    const [values, setValues] = useState(taskModel)

    const createTask = () => {
        httpPost("tasks", values).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <div className="container-fluid login-bg">
            <div className="row main-wrapper">
                <div className="container-primary col-md-2 offset-md-10">
                    <div className="row">
                        <div className="jumbotron vertical-center">
                            <div className="container">
                                <form>
                                    <InputText hint="Title" id="title" type="text" handleInput={[handleInput, values, setValues]} />
                                    <InputText hint="Date" id="datetime" type="date" handleInput={[handleInput, values, setValues]} />
                                    <InputText hint="Priority" id="priority" type="number" value="1" handleInput={[handleInput, values, setValues]} />
                                    <InputText hint="Description" id="description" type="textarea" handleInput={[handleInput, values, setValues]} />
                                    <ButtonPrimary text="Create Task" callBack={() => { createTask() }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}