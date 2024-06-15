import React from 'react';
import MovingButtons from './MovingButtons';
import './MovingButtons.css'; // Import your main CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Moving Buttons Example</h1>
      </header>
      <main className="App-main">
        <MovingButtons buttonCount={20} /> {/* Adjust buttonCount as needed */}
      </main>
    </div>
  );
}

export default App;
