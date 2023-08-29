import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import BodyComponent from './component/BodyComponent';
import ItemComponent from './component/ItemComponent';
import FooterComponent from './component/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent/>
      <ItemComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
