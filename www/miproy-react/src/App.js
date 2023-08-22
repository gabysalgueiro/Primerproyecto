import logo from './logo.svg';
import './App.css';
import { Datos_personales } from './Componentes/Datos_personales';
import { Educacion } from './Componentes/Educacion';
import { Experiencia } from './Componentes/Experiencia';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>Curriculum Vitae</h1>
        <Datos_personales/>
       <Educacion/>
       <Experiencia/>

      </header>

     
    </div>
  );
}

export default App;
