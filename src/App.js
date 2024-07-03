import './App.css';
import Header from './Components/Header/Header'
import HeaderSlackDetails from './Components/HeaderSlackDetails/HeaderSlackDetails'
import Goals from './Components/Goals/Goals'
import FooterLink from './Components/Footer/footerLink';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSlackDetails />
      <Goals />
      <FooterLink />
    </div>
  );
}

export default App;
