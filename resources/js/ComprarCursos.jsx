import react, {useState,useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


import Footer from './Footer';
import Header from './Header';
import Rating from 'react-rating';


const ComprarCursos=()=>{
    const [datos,setDatos]=useState([]);
    const [buscar,setBuscar]=useState("");
    const [rating, setRating] = useState(0);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
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
<Header/>
<div className="container-fluid">

<Carousel activeIndex={index} onSelect={handleSelect}>
{datos?.map(p=>(
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={"./imagenes/"+p.thumbnail}
          alt="First slide" height="400" fluid
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      ))}
    </Carousel>

    </div>
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
<Footer/>

</>)


}
export default ComprarCursos;