import React from 'react';
import logo from './logo.svg';
import Canvas from './components/Canvas/Canvas';
import Toolbar from './components/Toolbar/Toolbar';
import './App.scss';
import './paint.scss';

function App() {
  return (
    <section className="banner">
        <div className="container">
            <div className="module w25">
                <Toolbar />
            </div>

            <div className="module w75">
                <div class = "container">
                    <Canvas />
                </div>
            </div>
        </div>
    </section>
  );
}

export default App;
