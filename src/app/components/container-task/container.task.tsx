import "bootstrap/dist/css/bootstrap.css"

export default function ContainerTask(props: { task: any }) {

    return (
        <div className="col-md-3">
            <div className="list-group">
                <div className="list-group-item active text-center text-uppercase"><h1>{props.task.title}</h1></div>
                <div className="list-group-item">{props.task.description}</div>
            </div>
            <br></br>
        </div>
    )

}