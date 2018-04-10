import React from 'react';
// import { Button } from './Button';
import { Thirties } from './Thirties';
import { Forties } from './Forties';
import { Sixties } from './Sixties';
import { Family } from './Family';
import { Instruments } from './Instruments';
import { Documents } from './Documents';

export class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div>
          {/* <header>
          <Button type='Home' onClick={this.handleClick} />
          <Button type='1930s' onClick={this.handleClick} />
          <Button type='1940s' onClick={this.handleClick} />
          <Button type='1960s-70s' onCLick={this.handleClick} />
          <Button type='Family' onClick={this.handleClick} />
          <Button type='Instruments' onClick={this.handleClick} />
          <Button type='Documents' onClick={this.handleClick} />
          <Button type='About' onClick={this.handleClick} />
          </header> */}
        </div>
      <h1 className="App-title">The Blue Sky Boys - Country Music's Greatest Brother Duet!</h1>
        <div>
          <h1>The 1930's</h1>
          <Thirties  />
          <h1>The 1940's</h1>
          <Forties  />
          <h1>The 1950's - 60's</h1>
          <Sixties />
          <h1>Family</h1>
          <Family />
          <h1>Instruments</h1>
          <Instruments  />
          <h1>Documents</h1>
          <Documents  />
        </div>
    </div>
    )
  }
}
