import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
import { Button } from './components/SharedComponents';

const App = () => {

  return (
      <div>
        <Header />
          <ContentA />
          <ContentB />


        <Footer />

      </div>
  );
}

export default App;
