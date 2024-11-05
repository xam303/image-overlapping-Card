// src/App.js

import React from 'react';
import ResponsiveCard from './components/ResponsiveCard';

function App() {
  return (
    <div className="App">
      <ResponsiveCard
        image="https://via.placeholder.com/350x200"
        title="Card Title"
        description="This is a description for the card component. It’s responsive and has a hover effect."
        link="#"
      />
    </div>
  );
}

export default App;
