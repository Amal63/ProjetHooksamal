import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'


const MovieCard = ({movie}) => {
    return (
        <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Image} />
   <StarRating rate = {movie.rating}/> 
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.date}
    </Card.Text>
    <Button variant="success"><Link to={`/trailer/${movie.name}`}>Trailer</Link></Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
