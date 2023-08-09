import react, {useState,useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Header from './Header';
import Rating from 'react-rating';


const ComprarCursos=()=>{
    const [datos,setDatos]=useState([]);
    const [buscar,setBuscar]=useState("");
    const [rating, setRating] = useState(0);
    useEffect(() => {
      axios.get('http://localhost:8000/api/cursos').then(res=>setDatos(res.data.cursos))
    }, [])
     const handleSearch=(e)=>{
        e.preventDefault();
      axios.get(`http://localhost:8000/api/buscar?termino=${buscar}`).then(res=>setDatos(res.data.cursos))
    
    
    
     }
    
      const handleRatingChange = (datos) => {
    
        setRating(datos);
    
      };

return(<>
<div className="container container-cursos">

{datos?.map(p=>(
    <div className="item-cursos">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"./imagenes/"+p.thumbnail}  />
      <Card.Body>
        <Card.Title style={{color:"green"}}>{p.title} | {p.level}</Card.Title>
        <Card.Text>
      <h6 style={{color:"green"}}>{'$'+p.price} </h6>
      <p>Calificación: {rating}</p>
      <Rating
        initialRating={rating}
        emptySymbol={<span className="rating-icon">&#9734;</span>}
        fullSymbol={<span className="rating-icon">&#9733;</span>}
        onChange={handleRatingChange}
      />
        </Card.Text>
        <Button variant="success" style={{width:"100%"}}>Add To Cart</Button>
      </Card.Body>
    </Card>
</div>


))}

            </div>


</>)


}
export default ComprarCursos;