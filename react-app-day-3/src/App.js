import logo from './logo.svg';
import './App.css';
import Detail from './component/RestaurantDetails';
import data from "./data.json";

function App() {
 
  return (
    <div className="App">
       <Detail data={data} />
    </div>
  );
}

export default App;
