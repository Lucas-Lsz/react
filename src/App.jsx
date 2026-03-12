import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import BemVindo from './components/BemVindo';

function App() {
  return (
    <>
      <div className="app">

        <Header
          titulo="Meus Hábitos"
          descricao="GeGerencie seus hábitos  diários de forma simples e visual"    
        />
        <BemVindo nomeUsuario="lucas" totalHabitos={5} ></BemVindo>
        <Footer />
      </div>
    </>
  );

}
export default App;
