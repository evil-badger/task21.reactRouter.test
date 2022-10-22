
function Cards(props) {
    const click = () => {
        props.onSelect(props.record)
    }
    return (
        <div onClick={click} className='SubBlock'>
            <p>{props.record.name}</p>
            <p>{props.record.phone}</p>
        </div>
    )
}

export default Cards;