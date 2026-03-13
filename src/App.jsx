import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import BemVindo from './components/BemVindo';
import SecaoHabitos from './components/SecaoHabitos';
import HabitList from './components/HabitList';

function App() {
  const habits = [
    { id: 1, titulo: 'exercício', meta: 5, ativo: true, diasfeitos: 5 },
    { id: 2, titulo: 'leitura', meta: 7, ativo: true, diasfeitos: 3 },
    { id: 3, titulo: 'meditação', meta: 7, ativo: false, diasfeitos: 0 },
    { id: 4, titulo: 'hidratação', meta: 7, ativo: true, diasfeitos: 6 },
  ]


  return (
    <>
      <div className="app">

        <Header
          titulo="Meus Hábitos"
          //descricao="Gerencie seus hábitos  diários de forma simples e visual"    
        />
        <BemVindo nomeUsuario="lucas" totalHabitos={habits.length} 
        /> 
        <secaoHabitos titulo="turma iteam">
          <HabitList habits={habits} />
        </secaoHabitos>
        <Footer />
      </div>
    </>
  );

}
export default App;
