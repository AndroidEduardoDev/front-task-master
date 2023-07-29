import "@/app/globals.css"
import "@/app/css/login.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import "@/app/css/button-primary.css"
import React, { useState } from "react"
import animationEmpty from "@/app/assets/row/empty.json"
import Lottie from 'react-lottie';
import Link from "next/link"
import { httpGet } from "@/app/core/http-request-contract"
import ContainerTask from "@/app/components/container-task/container.task"

export const taskModelSingle = { id: 1, title: "", description: "", datetime: "", priority: "" }
export const taskModel = [taskModelSingle]

export default function HomeComponent() {
    const [tasks, setTask] = useState(taskModel)

    React.useEffect(() => {
        httpGet("tasks").then((data) => {
            setTask(data)
            console.log(data)
        }).catch((error) => console.log(error))
    }, [])

    const results = tasks.map((task) =>
        <ContainerTask key={task.id} task={task} />
    );

    return (
        <div className="container-fluid login-bg">
            <div className="row main-wrapper">
                <div className="container-primary col-md-8 offset-md-2">
                    <div className="row">
                        <div className="jumbotron vertical-center">
                            <div className="container">
                                {tasks.length > 0 ? (
                                    <div className="row">
                                        {results}
                                    </div>
                                ) : (
                                    <Lottie options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: animationEmpty,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    }} height={400} width={400} />
                                )
                                }

                                <Link href={"/task/create"} className="btn buttonPrimary col-md-12"> Create Task</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}