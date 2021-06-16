import { useState } from 'react';
import './App.css';
import { getEverything } from '../newsApi/newsApi';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onSubmit = (e) =>{
    e.preventDefault();
    getEverything(searchTerm).then();
  }

  return (
    <div className="App">
        <form onSubmit={onSubmit}>
          <input type="text" onChange={e => setSearchTerm(e.target.value)}/>
          <input type="submit" value="Search"/>
        </form>
    </div>
  );
}

export default App;
