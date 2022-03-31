import './App.css';
import MyNavBar from './Components/MyNavBar';
// import ClickCounter from './Components/MyContainer';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <MyNavBar />
      </header>
        <ItemListContainer name="Romina" />
        {/* <ClickCounter /> */}
    </div>
  );
}

export default App;
