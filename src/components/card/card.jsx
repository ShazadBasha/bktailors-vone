import React from 'react'

const Card = (props) => {
    return (
        <section className='card'>
            <img src={`https://picsum.photos/id/${props.customerCard.id}/100`} alt={props.customerCard.name} />
                     <label> Name:<b> {props.customerCard.name}</b></label>
                     <label>EmailId:<b> {props.customerCard.email}</b></label>
        </section>
    )
}

export default Card
