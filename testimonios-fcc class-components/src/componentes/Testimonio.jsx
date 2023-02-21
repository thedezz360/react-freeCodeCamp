import "../css/Testimonio.css";
import React from "react";

class Testimonio extends React.Component {
  render(){
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`foto ${this.props.nombre}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <b>{this.props.nombre}</b> en {this.props.pais}
          </p>
          <p className="cargo-testimonio">
            {this.props.cargo} en <b>{this.props.empresa}</b>
          </p>
          <p className="texto-testimonio">
            "{this.props.testimonio}"
          </p>
        </div>
      </div>
    );
  }
}

export default Testimonio;
