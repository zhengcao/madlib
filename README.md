# MadLib
In this project, you will explore handling input events and submission by create a [Mad Lib](https://en.wikipedia.org/wiki/Mad_Libs) game.

This is a [Stage]() project. You will be submitting a PR for this project at the end.

## Learning Goals
- Extend code provided
- Practice using events
- Pass custom information to an event handler function
- Dynamically construct components based on data

## Scaffolding
The data structure that drives the UI is madlibs/MadLibs.js. To complete your objectives, you will not need to modify this file. The data in this file is an array of Madlib objects. A MadLib object has three properties that you'll utilize:
- `title` - the title of the Madlib
- `words` - an array of fill-in-the-blank 'word' objects (these objects contain a `key`, `label`, and `value` property)
- `getText()` - a function that returns the Madlib text

## Requirements

### Baseline
As a starting point, review the code that has been provided to you.

To work through the analysis of the existing code, determine how to get the application to load a **random** MadLib, instead of loading the first one which it will currently always do by default.

### Wave 1
* `WordForm.js` should render text inputs for all word objects in the array - use the `label` property in the word object for the value of the input's [placeholder](http://www.w3schools.com/Tags/att_input_placeholder.asp) attribute.
  * These text inputs should call the `_onInputChange()` function in `WordForm.js` when a change event occurs - and pass in the appropriate arguments that `_onInputChange()` is expecting.
* The `Story.js` component should simply display the value returned from the `getText()` function on the `MadLib` object - but only have this component displayed when all word objects have values.

### Wave 2
Instead of selecting a random MadLib puzzle for the user, implement a feature that will instead allow the user to choose from a dropdown which puzzle they want to play.

* Create a `<select>`/dropdown that allows a user to switch the selected MadLib to play
* *Map* through the array in `this.state.madlibs` - gather the titles, and display those as the dropdown `<options>`.
* Using the `onChange` event, set the `selectedMadLib` object in `App.js`'s state to the selected MadLib.

## What We're Looking For
You can look [here](./feedback.md) for what your instructors will look for in your submission.
