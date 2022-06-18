import React from 'react';
export class Hello extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    console.log(this.props);
}
  render() {
    return (
      <diV>
         <h1>Hello {this.props.employee} </h1>
      </diV>
    );
  }
}
