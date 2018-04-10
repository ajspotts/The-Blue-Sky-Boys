import React from 'react';

export class Button extends React.Component {
  render() {
    let buttonText = `${this.props.type}`;
    return (
        <button onClick={this.props.onClick}>
          {buttonText}
        </button>
    )
  }
}
