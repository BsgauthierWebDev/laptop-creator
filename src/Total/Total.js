import React, {Component} from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Total extends Component {
    render() {
        const total = Object.keys(this.props.cartContents).reduce(
            (acc, curr) => acc + this.props.cartContents[curr].cost, 0
        );
        return(
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
        );
    }
}

export default Total;