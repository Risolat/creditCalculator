import React, { Component } from 'react';
import InputRange from 'react-input-range';
import Display from './Display';

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";


class Calculator extends Component{
  state = {
    amountMoney: 1000,
    yearsValue: 1
  };

  handleAmountChange = (value) =>{
    this.setState({amountMoney: value});
  };
  handleYearChange = (value) => {
    this.setState({yearsValue: value});
  };

  render(){
    const {amountMoney, yearsValue} = this.state;
    return(
      <div>
        <h4>Kerakli Miqdor {amountMoney} so'm</h4>
        <InputRange
          step={1000}
          maxValue={1000000}
          minValue={1}
          value={amountMoney}
          onChange={this.handleAmountChange}
        />
        <h4>Muddat {yearsValue} yilga</h4>
        <InputRange 
          step={1}
          maxValue={3}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountMoney} />
      </div>
    )
  }
}
export default Calculator;