import './App.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import ItemListContainer from './Components/Items/ItemListContainer';

function App() {
  return (
      <>
        <header>
        <MyNavBar />
        </header>
        <ItemListContainer />
      </>
      
  );
}

export default App;
