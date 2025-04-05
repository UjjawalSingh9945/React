const InputBox = (props) => {
    return (
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                value = {props.value}
                type="text"
                placeholder="password"
                readOnly
            >
            </input>
            <button>Copy</button>
        </div>
    )
}
export default InputBox;
