
import Footer from './Footer';
import Header from './Header';
import '../css/about.css';

const About=()=>{


return(<>
<Header/>
<div className="container">
    <div className="row">
    <div className="col-md-4 columna">
    <h3>DESCRIPCION DE LA EMPRESA</h3>

<p>El grupo ENJOFRA BIM es una empresa peruana que se dedica a impartir capacitaciones en las tendencias tecnológicas dentro del sector de ingeniería y construcción a través de cursos de alto nivel, contando con docentes de excelencia, asimismo desarrollamos proyectos bajo el enfoque de la metodología BIM, VDC, IPD.</p>
</div>
<div className="col-md-4 columna">
<h3>MISION DE LA EMPRESA</h3>

<p>Grupo ENJOFRA BIM tiene como misión satisfacer las necesidades de nuestros clientes, buscando fomentar el uso de las nuevas tendencias tecnológicas en la industria de la ingeniería y construcción, con la finalidad de que el usuario tenga un óptimo desempeño en el ámbito laboral y personal, todo dentro de un marco de transparencia y calidad que nos representa como empresa.</p>
</div>
<div className="col-md-4 columna">
<h3>VISION DE LA EMPRESA</h3>

<p>En el grupo ENJOFRA BIM tenemos como visión ser una empresa reconocida y líder en la industria de la ingeniería y construcción y posicionarse como una de las mejores a nivel nacional y latinoamericana, ofreciendo servicios de alta calidad, a través de una organización esquematizada y una metodología de trabajo dinámica, buscando siempre satisfacer las necesidades de nuestros clientes y estar a la vanguardia en las mejoras dentro del sector de la construcción.

Además, el grupo ENJOFRA BIM viene con la idea de impulsar la construcción digital a nivel regional y nacional mediante la implementación BIM en entidades publicas y privadas con la ayuda de consultores y especialistas BIM que forman parte del grupo ENJOFRA BIM.</p>
</div>
</div>
    
    
    </div>
    <Footer/>
    </>)

}
export default About;