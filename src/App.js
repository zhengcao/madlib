import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import NewStoryForm from './components/NewStoryForm.js';
import DropDownMenu from './components/DropDownMenu.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[Math.floor(Math.random() * 4)],
      isStoryVisible: false,
    };

    this.updateWord = this.updateWord.bind(this);
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord(key, value) {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  showStory = () => {
    if (this.state.isStoryVisible) {
      return(
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      );
    }
  }

  changeStoryVisibility = () => {
    this.setState({
      isStoryVisible: true,
    });
  }

  updateStoryForm = (storyIndex) => {
    this.setState({
      selectedMadLib: MadLibs[storyIndex],
    });
  }

  render() {
    let titles = [];
    MadLibs.map ((madlib) => {
      titles.push(madlib.title);
    });

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Choose your story from the following options</p>
        <DropDownMenu
          titles={titles}
          updateStoryForm={this.updateStoryForm}
          />
        <p>Fill in all of the choices to see your final story.</p>
        <NewStoryForm
          updateWord={this.updateWord}
          words={this.state.selectedMadLib.words}
          changeStoryVisibility={this.changeStoryVisibility}
          />
        {this.showStory()}
      </section>
    );
  }
}

export default App;
