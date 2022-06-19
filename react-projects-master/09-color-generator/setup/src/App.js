import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(error);
      console.error(error)
    }
  }

  return <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="#f15025"
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error' : null}`} />
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index} hexColor={color.hex} {...color} index={index} />
      })}
    </section>
  </>
}

export default App;
