import React from 'react';
import CartItem from './CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


export default class Cart extends React.Component{
    render() {
      const summary = Object.keys(this.props.selected).map((feature, idx) => {
      return(
        <CartItem feature={feature}
        idx={idx}
        selected={this.props.selected} />
      )  
  
        
      });
      const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );
        return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        )
    }
}