import './App.css';
import MyNavBar from './Components/MyNavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <MyNavBar />
      </header>
      <ItemListContainer name="Romina" />
    </div>
  );
}

export default App;
