import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Listado } from './components/Listado';
import { BaseColaboradores } from './json'
import { Formulario } from './components/Formulario';

function App() {
  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Formulario />
      <Listado colaboradores={BaseColaboradores} />
      {/* <Tareas /> */}
    </>
  )
}

export default App
