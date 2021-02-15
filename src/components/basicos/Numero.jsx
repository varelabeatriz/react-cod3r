export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min);

    return (
        <h2> { aleatorio} </h2>
    )
}