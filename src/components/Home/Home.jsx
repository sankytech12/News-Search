import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchHackerNews } from '../../api';
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Home.css'

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query) {
      setLoading(true);
      try {
        const response = await searchHackerNews(query);
        setResults(response.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="container"> 
    <div className="input-container">
      <input
        type="text"
        placeholder="Search Hacker News"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>

    {
    loading && 
    <>
    <FontAwesomeIcon icon={faSpinner} spinPulse/>
    <span style={{margin:"10px"}}>Loading...</span>
    </>
    }

    <ul>
      {results.map((result) => (
        <li key={result.objectID}>
          <Link to={`/post/${result.objectID}`}>{result.title}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Home;
