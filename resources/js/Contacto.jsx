const Contacto=()=>{


return(<>
<div className="container">
<div className="row">
<div className="col-md-6  row-item">
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
<textarea className="form-control" col="10" row="10"></textarea>
</div>
<button type="submit" className="form-control">Enviar</button>
</form>
</div>
</div>
    </div>
</>)

}
export default Contacto;