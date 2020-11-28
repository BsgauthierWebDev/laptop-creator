import React, {Component} from 'react';
import Total from '../Total/Total'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  class Summary extends Component {
      render() {
          const summary = Object.keys(this.props.state).map((item,index) => {
              const featureHash = item + ' ' + index;
              const itemOption = this.props.state[item];

              return(
                <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{item} </div>
                <div className="summary__option__value">{itemOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(itemOption.cost)}
                </div>
              </div>
              );
          });
              return (
                <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total cartContents={this.props.state} />
                </section>
              );
      }
  }

  export default Summary;