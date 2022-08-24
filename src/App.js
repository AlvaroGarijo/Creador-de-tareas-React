import './App.css';
import { Logo } from './componentes/Logo';
import { Footer } from './componentes/Footer';
import { ListaDeTareas } from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo/>
      <div className='tareas-lista-principal'>
        <h1 className='titulo'>Mis tareas</h1>
        <ListaDeTareas />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
