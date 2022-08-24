import './App.css';
import { Footer } from './componentes/Footer';
import freCodeCampLogo from './imagenes/freeCodeCampLogo.png'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-container'> 
        <img
        className='freecodecamp-logo'
        src={freCodeCampLogo}
        alt='logo de freeCodeCamp'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
