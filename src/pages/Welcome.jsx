import React from 'react';
import { Hello } from './Hello';
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome Vicash</p>
        <Hello employee={'vicash'} />
        <Hello employee={'vimal'} />
        {/* <Hello /> */}
        <button></button>
      </div>
    );
  }
}
