import React from 'react';
// import { Button } from './Button';
import { Thirties } from './Thirties';
import { Forties } from './Forties';
import { Rca } from './Rca';
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
        <div align="center">
          <h1 className="App-title">The Blue Sky Boys - Country Music's Greatest Brother Duet!</h1>
          <img src="https://s20.postimg.cc/fpeoi097x/BSBlogo.jpg" alt="BlueSky Boys logo" height={400} width={600}></img>
          <h2>Welcome to the page honoring The Blue Sky Boys</h2>
          <h2>***Under Construction***</h2>
        </div>
        <div>
          <h1>The 1930s</h1>
          <Thirties  />
          <h1>The 1940s</h1>
          <Forties  />
          <h1>1947 RCA Photoshoot</h1>
          <Rca />
          <h1>The 1960s - 70s</h1>
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
