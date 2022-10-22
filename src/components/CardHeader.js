function CardHeader(props) {
    return (
        <div className='Block'>
            <p>{props.record && props.record.name}</p>
            <p>{props.record && props.record.phone}</p>
        </div>
    )
}

export default CardHeader;