import React from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {
  INCREAMENT,
  DECREAMENT,
  COUNTER_RESET,
} from '../store/Action/CounterAction';

class Counter extends React.Component {
  // initialState = {
  //   Count: 0,
  // };
 
  increament=()=>{
this.props.dispatch({type:INCREAMENT});
  }
  decreament=()=>{
    this.props.dispatch({type:DECREAMENT});
  }
  counter_reset=()=>{
    this.props.dispatch({type:COUNTER_RESET});
  }
  
  //   incriment(){
  // this.setState({
  //   Count:this.state.Count+1
  // })
  //   }
  //   decriment(){
  //     this.setState({
  //       Count:this.state.Count-1
  //     })
    

  render() {
    return (
      <div>
        <button onClick={this.increament}>+</button>
        <p> {this.props.Count}</p>
        <button onClick={this.decreament}>-</button>
        <button onClick={this.counter_reset}>counter</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);