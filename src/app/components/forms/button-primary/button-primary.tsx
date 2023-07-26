import "bootstrap/dist/css/bootstrap.css"
import "@/app/css/button-primary.css"
import "@/app/globals.css"

export default function ButtonPrimary(props: { text: string, callBack: Function }) {
    return (
        <button type="button" className="btn buttonPrimary col-md-12" onClick={function () { props.callBack() }}>{props.text}</button>
    );
}
