import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from 'next-themes';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
