import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function CartItem(props) {
    const featureHash = props.feature + '-' + props.idx;
        const selectedOption = props.selected[props.feature];
    return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    
    


}