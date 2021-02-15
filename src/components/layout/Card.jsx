import "./Card.css"

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || 'teal',
        borderColor: props.color || 'teal',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}