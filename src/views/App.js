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
      setNews(response);
    }).catch(err =>{
      setErrorMessage(err);
    });
  }

  return (
    <div className="App">
        <div className="errorMessage">
          {errorMessage}
        </div>
        <form onSubmit={onSubmit} className="searchForm">
          <input type="text" onChange={e => setSearchTerm(e.target.value)} className="searchInputBox"/>
          <input type="submit" value="Search" className="searchSubmitButton"/>
        </form>
      {news.map((item, index) =>{
        return NewsCard(item, index);
      }
      )}
    </div>
  );
}

export default App;
