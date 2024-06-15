import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import PayShedule from './views/PayShedule';
import Exam from './views/Exam';
import Contact from './views/Contact'

function App() {

  const[page, setPage] = useState('Main')

  const pages = {
    Main: <Main />,
    PayShedule: <PayShedule/>,
    Exam: <Exam/>,
    Contact: <Contact/>
  }
  

  return (
    <div className="App">
      <Header setPage={setPage}/>
      {pages[page]}
      <Footer/>
    </div>
  );
}

export default App;
