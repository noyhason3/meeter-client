import './App.scss';
import { Footer } from './cmps/footer/Footer';
import { Header } from './cmps/header/Header';
import { Main } from './cmps/main/Main';
import { Homepage } from './pages/homepage/Homapage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Likespage } from './pages/likes/Likespage';
import { Personalpage } from './pages/personal/Personalpage';
import { Chatspage } from './pages/chats/Chatspage';

export const App = () => (
  <div className="App">

    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/likes" element={<Likespage />} />
        <Route path="/personal" element={<Personalpage />} />
        <Route path="/chats" element={<Chatspage />} />
        {/* <Main /> */}
      </Routes>
      <Footer />
    </Router>


    {/* <Homepage /> */}
  </div>
)

