//importamos el componente header
import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/listadoPaciente.jsx"
import Formulario from "./componentes/formulario.jsx"
import Error from "./componentes/error.jsx"
import Paciente from "./componentes/error.jsx"

function App(){

  return (
      <>
      <Header/>
      <ListadoPaciente/>
      <Formulario/>
      <Error/>
      <Paciente/>
      </>
  )

}
export default App 

App(); 
