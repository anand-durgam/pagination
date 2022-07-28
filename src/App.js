import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Pagination';

const App = () => {

  const [data , setData] = useState([])
  const [perPage , setPerPage] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      response => {setData(response.data); setPerPage(response.data.slice(0,10))}
    )
  },[])

  const pageHandler = (num) => {
    // console.log(num)
    setPerPage(data.slice(num*10 - 10,num*10))
  }


  return (
    <div className="App">
    {data.length >= 1 ? 

    <div>
      {perPage.map(item => 
      <div className='list-container' key={item.id}><p>{item.id}</p></div>)}
      <Pagination data={data} pageHandler={pageHandler}/>
    </div>

    :
      <div>Data is Loading ...</div>
     }
     
    </div>
  );
}

export default App;
