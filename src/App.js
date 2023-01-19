
import './App.css';
import { useState } from 'react';
import MovieList from './component/MovieList'; 
import AddMovie from './component/AddMovie';
import { v4 as uuidv4 } from 'uuid';
import Filter from './component/Filter';
import { Route,Routes } from 'react-router-dom';
import Descriptions from './component/Descriptions';




function App() {
const[key,setKey]=useState("")
const [rating , setRating] = useState(1)

const [movie,setMovie]=useState([
  
  {MovieName:'Iron Man',
  Description:'Marvel/American',
  rating: 4,
  image:"https://fr.web.img3.acsta.net/medias/nmedia/18/62/89/45/18876909.jpg",
  id:1,
  trailer:'https://www.youtube.com/embed/p0lSTyZTpiY',
},
  {MovieName:'Thor',
  Description:'Marvel/American',
  rating: 3,
  image:"https://i0.wp.com/cinedweller.com/wp-content/uploads/2022/07/thor-affiche-definitive-film-france.jpg?ssl=1",
  id:uuidv4(),
  trailer:'https://www.youtube.com/embed/JOddp-nlNvQ',
},
  {MovieName:'Bat Man',
  Description:'Marvel/American',
  rating: 2,
  image:"https://fr.web.img5.acsta.net/pictures/22/02/16/17/42/3125788.jpg",
  id:uuidv4(),
  trailer:"https://www.youtube.com/embed/NLOp_6uPccQ"
},
  
])
const handeleAdd=(newMovie)=>{
  setMovie([...movie,newMovie]);
}

const handelKey=(text)=>{
  setKey(text)
}

const handleRating = (number) => {
  setRating(number)
}
  return (
    
  
    <div className="App">
     
    
    <Routes>
      <Route path='/' element={
        <>
            
      
     <Filter handelKey={handelKey} handleRating={handleRating}/>
    <AddMovie handeleAdd={handeleAdd}/>
    <br></br>
    <MovieList movie={movie.filter(el => el.MovieName.toLowerCase().includes(key.toLowerCase().trim())&& el.rating >= rating)}/>
        
        
        
        </>
      }/>
      <Route path='/trailer/:id' element={<Descriptions movie={movie}/>}/>
  </Routes>
    
    </div>
    
  );
}

export default App;
