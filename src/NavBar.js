import React from 'react';
import { Button } from './Button';
import { Forties } from './Forties';

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Button type='Home' onClick={this.handleClick} />
        <Button type='1930s' onClick={this.handleClick} />
        <Button type='1940s' onClick={this.handleClick} />
        <Button type='1960s-70s' onCLick={this.handleClick} />
        <Button type='Family' onClick={this.handleClick} />
        <Button type='Instruments' onClick={this.handleClick} />
        <Button type='Documents' onClick={this.handleClick} />
        <Button type='About' onClick={this.handleClick} />
      </div>
    )
  }
}
