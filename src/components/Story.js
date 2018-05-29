import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
      <section className="story">
        <p>{ this.props.text }</p>
      </section>
    );
  }
}

export default Story;
