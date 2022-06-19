import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [personsList, setPersonList] = useState(data);

  return (
    <main>
      <section className='container'>

        <h3>{personsList.length} birthdays today</h3>

        {personsList.map((person) => {
          return <List key={person.id} person={person} />
        })}

        <button onClick={() => setPersonList([])}>Clear All</button>

      </section>
    </main>
  )
}

export default App;
