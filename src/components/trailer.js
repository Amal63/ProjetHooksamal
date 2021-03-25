import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Trailer = ({movies,match}) => {
    return (
        <div>
            {movies.filter((el)=>el.name===match.params.name).map((el)=>(
            <div>
                <iframe
              width="727 px"
              height="409 px"
              src={el.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
<Button variant="success"><Link to='/'>return to home</Link></Button>
            </div>))}
           </div>
    )} 

export default Trailer
