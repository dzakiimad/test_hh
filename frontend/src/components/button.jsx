export default function Button(props) {
    return (
        <button type={props.type ?? "button"} onClick={props.click} className={`py-2 px-4 bg-${props.color} text-white hover:text-${props.color} hover:bg-backgroundPage border-0 rounded-lg`}>{props.text}</button>
    )
}