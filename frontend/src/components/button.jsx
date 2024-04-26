export default function Button(props) {
    return (
        <button type={props.type ?? "button"} onClick={props.click} className={`btn bg-${props.color} text-white hover:text-${props.color} hover:bg-backgroundPage rounded-lg`}>{props.text}</button>
    )
}