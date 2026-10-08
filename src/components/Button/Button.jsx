import './Button.css'

function Button(props) {
    return (
        <button onClick={props.onClick} className={`${'btn'} ${!props.isDeleted ? 'delete' : 'add'}`}>
            {props.children}
        </button>
    )
}

export default Button