import React,{ useState, useEffect} from 'react';
import TodayPickups_cells from './components/todayPickup_cells'
import './App.css';

function App() {

  // const [order, setOrder] = useState(0)

  // useEffect(()=>{
  //   setOrder(1)
  // },[])
    return (
        <div className="pickup-app">
          <TodayPickups_cells />
        </div>
      )
  }
  


export default App;
