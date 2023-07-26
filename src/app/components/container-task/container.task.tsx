import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react";


export default function ContainerTask(props: { task: any }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    return (
        <div className="col-md-3" >
            <div className="list-group">
                <div className="list-group-item active text-center text-uppercase"><h1>{props.task.title}</h1></div>
                <div className="list-group-item">
                    <button type="button" className="btn btn-primary form-control" data-bs-toggle="modal" data-bs-target={"#task" + props.task.id}                   >
                        Detail task
                    </button>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <div
                        className="modal fade"
                        id={"task" + props.task.id}
                        aria-labelledby="taskLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-uppercase" id="taskLabel">
                                        {props.task.title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {props.task.id}
                                    {props.task.name}
                                    {props.task.description}
                                    {props.task.priority}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}