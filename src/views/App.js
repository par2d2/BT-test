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

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    if (errorMessage !== ''){
        setErrorMessage('')
    }
  }

  return (
    <div className="App">
        <div className="errorMessage">
          {errorMessage}
        </div>
        <form onSubmit={onSubmit} className="searchForm">
          <input type="text" onChange={onChange} className="searchInputBox" title="search-input"/>
          <input type="submit" value="Search" className="searchSubmitButton" title="search-button"/>
        </form>
        <div className="newsCardWrapper">
          {news.map((item, index) => NewsCard(item, index))}
        </div>
    </div>
  );
}

export default App;
