// src/App.js
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Hello, Tailwind!</h1>
        <p className="text-gray-700">This is a simple example of using Tailwind CSS in a React project.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Click Me</button>
      </div>
    </div>
  );
}

export default App;
