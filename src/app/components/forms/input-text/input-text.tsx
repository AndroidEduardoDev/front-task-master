import "bootstrap/dist/css/bootstrap.css"
import "@/app/components/forms/input-text/input-text.css"
import "@/app/globals.css"

export default function InputText(props: { hint: string, type: string, id: string, handleInput: any[], value?:string}) {
    return (
        <div className="form-group">
            <label className="label text-sm-left" htmlFor={props.id}>{props.hint}</label>
            <input className="form-control" type={props.type} placeholder={props.hint} id={props.id} value={props.value} name={props.id} onChange={e => props.handleInput[0](e, props.handleInput[1],props.handleInput[2])} />
        </div>
    )

}
