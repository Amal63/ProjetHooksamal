import React from 'react'

const StarRating = ({rate}) => {
    const stars = (rating) => {
        let stars = [];
        for (let i = 0; i< 5; i++) {
if ( i< rating){
    stars.push(<span style={{ color: "gold" }}> ★ </span>);
} else stars.push( <span style={{ color: "black"}}>☆</span>)
        }
        return stars
    }
    return (
        <div>
           { stars(rate)}
            
        </div>
    )
}

export default StarRating
