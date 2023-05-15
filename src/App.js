import './App.css';
import ContactoListComponent from './components/contact_list';
import ContactoComponent from './components/contact';

function App() {

  const contactoEjemplo = {
    name: " Santiago",
    apellido: "Calleros",
    email: "Ejempli123@gmail.com",
    conectado: true
  }

  return (
    <div className="App">
      <header className="App-header">
        <ContactoComponent contacto={contactoEjemplo}></ContactoComponent>
        <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
