import '../css/contacto.css';

import Footer from './Footer';
import Header from './Header';
const Contacto=()=>{


return(<>
<Header/>
<div className="container container-contacto">
<div className="row item-row">
<div className="col col-md-7 col-ms-6">
<h2>Contacto</h2>
<form>
<div className="form-group">
<label>Nombre</label>
<input type="text" className="form-control" value=""/>
</div>
<div className="form-group">
<label>Email</label>
<input type="text" className="form-control" value=""/>
</div>
<div className="form-group">
<label>Comentario</label>
<textarea className="form-control textarea" col="20" row="10"></textarea>
</div>
<button type="submit"  className="btn btn-success button-success">Enviar</button>
</form>
</div>
</div>
    </div>
    <Footer/>
</>)

}
export default Contacto;