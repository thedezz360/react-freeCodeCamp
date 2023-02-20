import logoReact from '../../assets/react.svg';
import './Logo.css';

function Logo () {
    return (
			<div className="logo-contenedor">
        <img className="logo-react" src={logoReact} alt="logo React" />
      </div>
    )
}

export default Logo;