import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';



const MovieCard=({per,handleDlete})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={per.image} />
      <Card.Body>
        <Card.Title style={{color:'black'}}>{per.MovieName}
        

        </Card.Title>
        <Card.Text style={{color:'black'}} >
          {per.Description}
          

        </Card.Text>
        

          <ReactStars
         name="star" 
         
          value={per.rating} 
          editing={false}
          
        />,
          <Link to={`/trailer/${per.id}`}>  <Button variant="warning">Warning</Button></Link>
         

        <Button variant ="primary">delete</Button>
      </Card.Body>
    </Card>
  ); 
}

export default MovieCard;