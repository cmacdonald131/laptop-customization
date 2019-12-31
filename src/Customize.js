import React from 'react';
import CustomizeItem from './CustomizeItem';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Customize extends React.Component{
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
        return (
          <CustomizeItem 
            features={this.props.features}
            feature={feature}
            idx={idx}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature} />
        )    
          });
        
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
        )
    }
}


