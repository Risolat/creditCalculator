import React, { Component } from 'react';
import DisplayChild from './DisplayChild';

class Display extends Component{
  state ={
    Rate: 0.3
  };

  calculateMonthlyRepayment = () => {
    const {amount, years} = this.props;

    const decimalformat = this.state.Rate + 1;
    const totalOwed = decimalformat * amount;
    const monthlyReapayment = totalOwed / (years * 12);

    return <p>{Math.round(monthlyReapayment)}so'm</p>
  }

  percentageRate = () => {
    return <p>{this.state.Rate*100}%</p>
  }
  render(){
    return(
      <div className="flex">
       <DisplayChild func={this.percentageRate()} text="interest rate"/>
       <DisplayChild 
          func={this.calculateMonthlyRepayment()}
          text="Monthly Repayment"
       />
      </div>
    )
  }
}

// Display.propTypes = {
//   years: PropTypes.number.isRequired,
//   amount: PropTypes.number.isRequired
// };

export default Display;