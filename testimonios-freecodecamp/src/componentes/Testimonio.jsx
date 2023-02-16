import "../css/Testimonio.css";


function Testimonio({imagen, nombre, pais, cargo, empresa, testimonio}) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${imagen}.png`)}
        alt={`foto ${nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
					<b>{nombre}</b> en {pais}
				</p>
        <p className="cargo-testimonio">
					{cargo} en <b>{empresa}</b>
				</p>
        <p className="texto-testimonio">
          "{testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
