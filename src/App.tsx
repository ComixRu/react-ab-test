import React from 'react';
import { Experiment, Variant, emitter, experimentDebugger  } from '@marvelapp/react-ab-test';
import logo from './logo.svg';
import { VariantA } from './VariantA';
import { VariantB } from './VariantB';
import './App.css';

experimentDebugger.enable();
emitter.defineVariants('reactABtest', ['Variant-A', 'Variant-B'], [50, 50]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Split testing with <code>@marvelapp/react-ab-test</code> node package
        </p>
        <Experiment name='reactABtest'>
          <Variant name='Variant-A'>
            <VariantA />
          </Variant>
          <Variant name='Variant-B'>
            <VariantB />
          </Variant>
        </Experiment>

      </header>
    </div>
  );
}

export default App;
