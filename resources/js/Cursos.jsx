import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/fondo.css';
import react, {useState,useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Header from './Header';
import Rating from 'react-rating';
import 'animate.css';
const Cursos=()=>{
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
console.log(datos);
return(<>
 <Header  buscar={buscar} setBuscar={setBuscar} handleSearch={handleSearch}/>
    <div class="container-fluid fondo">
        <div className="row">
            <div className="col-md-6">
                <div className="col-sm-12">
                <h2 className="titulo animate__animated  animate__fadeInLeft">
                Capacitate y convierte
                 en especialista <span className="success1">IBM</span>
                 con mejores las abilidades del
                 <p className="success">Sector de Contruccion</p></h2>
                <p className="parrafo animate__animated animate__animate__fadeInRight">aprende tecnologia y metodologias</p>
                <p className="parrafo animate__animated animate__fadeInRight"> revit,navisworks,BIM,VDC,y mucho mucho mas</p>

<button type="button" className="btn  btn-lg btn-success">Inicia Ahora</button>
</div>
</div>
<div className="col-md-6">
<iframe width="560" height="315" src="https://www.youtube.com/embed/R4b2eZXKbvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>
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
        <Button variant="success" style={{width:"100%"}}>Ver mas</Button>
      </Card.Body>
    </Card>
</div>


))}

            </div>
            <div class="whatsapp-btn">
  <a href="https://wa.me/1234567890" target="_blank" title="Enviar mensaje de WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>
</div>
            <Footer/>

</>)


}
export default Cursos;