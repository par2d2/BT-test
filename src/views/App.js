import { useState } from 'react';
import './App.css';
import { getEverything } from '../newsApi/newsApi';
import NewsCard from '../components/NewsCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault();
    getEverything(searchTerm).then(response => {
      if(Array.isArray(response)){
        setNews(response);
      } else {
        setErrorMessage(response);
      }
    });
  }

  return (
    <div className="App">
      {errorMessage}
        <form onSubmit={onSubmit}>
          <input type="text" onChange={e => setSearchTerm(e.target.value)}/>
          <input type="submit" value="Search"/>
        </form>
      {news.map((item, index) =>{
        return NewsCard(item, index);
      }
      )}
    </div>
  );
}

export default App;
