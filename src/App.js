import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Acá va el catálogo" />
    </div>
  );
}

export default App;
