import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CardHeader from './components/CardHeader';
import Cards from './components/Cards';
import { Clock } from './components/Clock';



function App() {

  const [selectedCard, setSelectedCard] = useState();
  const showSelected = (card) => setSelectedCard(card);
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <Link to="index">Home</Link>
        <Link to="cards">Cards</Link>
        <Link to="clock">Clock</Link> */}
        <Routes>
          <Route path='index' element={<Cards />} />
          <Route path='' element={<Clock />} />
        </Routes>
      </BrowserRouter>
      <CardHeader record={selectedCard}></CardHeader>
      <div className='Block'>
        {
          data.map((record, index) =>
            <Cards
              key={`div number-${index}`}
              record={record}
              onSelect={showSelected}
            >
            </Cards>)
        }
      </div>
      <Clock />

    </React.Fragment>
  );
}

const data = [
  {
    name: 'Jon',
    phone: '+380123456789'
  },

  {
    name: 'Alice',
    phone: '+380123123123'
  },

  {
    name: 'Bob',
    phone: '+380123213543'
  }
]

export default App;
