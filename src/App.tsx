import './App.scss';
import { Footer } from './cmps/footer/Footer';
import { Header } from './cmps/header/Header';
import { Main } from './cmps/main/Main';
import { Homepage } from './pages/homepage/Homapage';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      {/* <Homepage /> */}
    </div>
  );
}

