# MadLib
In this project, you will explore handling input events and submission by creating a [Mad Lib](https://en.wikipedia.org/wiki/Mad_Libs) game.

This is a [Stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-2) individual project. You will be submitting a PR for this project at the end.

## Learning Goals
- Practice using events
- Pass custom information to an event handler function
- Dynamically construct components based on data
- Extend code provided

## Scaffolding
The data structure that drives the UI is madlibs/MadLibs.js. To complete your requirements, you will not need to modify this file. The data in this file is an array of Madlib objects. A MadLib object has three properties that you'll utilize:
- `title` - the title of the Madlib
- `words` - an array of fill-in-the-blank 'word' objects. Each object contain a `key`, `label`, and `value` property. You will fill in the values
- `getText()` - a function that returns the Madlib text with each word filled in

## Requirements

### Baseline
As a starting point, review the code that has been provided to you.

To work through the analysis of the existing code, determine how to modify the application to load a **random** MadLib, instead of loading the first one which it currently does by default.

### Wave 1
1. Create a new component which will render the forms inputs for each word in the puzzle.
    - You should utilize the `selectedMadLib` variable stored in the `App` components `state` to gather the words you need.
    - You may want to use the `placeholder` HTML attribute to include the `label` property for each word.
1. Tie each input to an event handler that will modify the state of the `selectedMadLib`.
    - You will need to pass not only the input's value but also information about _which_ input has changed through this event handler.
1. Modify the rendering of the `Story` component to only display once all of the input words have been filled out.

### Wave 2
Instead of selecting a random MadLib puzzle for the user, implement a feature that will instead allow the user to choose from a dropdown which puzzle they want to play.
- Create a dropdown menu that allows a user to switch the selected MadLib to play
- Gather the titles from the MadLibs object, and display those as the dropdown options
- Using the `onChange` event, set the `selectedMadLib` object in the `App` component's state to the selected MadLib

## What We're Looking For
You can look [here](./feedback.md) for what your instructors will look for in your submission.
