import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {

  return (
    <div>
      <h1>React and TypeScript</h1>
    </div>
  )
}

export default App;