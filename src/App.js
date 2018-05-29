import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import WordsForm from './components/WordsForm.js';
import Story from './components/Story.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0]
    };
  }
  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <WordsForm />
        <Story text={ this.state.selectedMadLib.getText() }/>
      </section>
    );
  }
}

export default App;
