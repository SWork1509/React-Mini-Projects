import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowers(data[page]);
    }
  }, [loading, page]);

  return <main>
    <div className="section-title">
      <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map(follower => {
          return <Follower key={follower.id} {...follower} />
        })}
      </div>
      {!loading && <div className="btn-container">
        <button className="prev-btn" disabled={page === 0 ? true : false} onClick={() => setPage(page - 1)}>Prev</button>
        {data.map((item, index) => {
          return <button key={index} className={`page-btn ${index === page ? 'active-btn' : ''}`} onClick={() => setPage(index)}>{index + 1}</button>
        })}
        <button className="next-btn" disabled={page === data.length - 1 ? true : false} onClick={() => setPage(page + 1)} >Next</button>
      </div>}
    </section>

  </main >
}

export default App
