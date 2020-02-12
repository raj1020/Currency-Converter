import React from 'react';
import Dollar from './Dollar';






function toUSDollar (dollarAmount) {
    return (dollarAmount* (1/0.7));
    
}

function toAusDollar (dollarAmount) {
    return (dollarAmount* 0.7);
    
}

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: '',
        currency: ''};
        this.usChange = this.usChange.bind(this);
        this.ausChange = this.ausChange.bind(this);
    }

   

    usChange(item) {
        this.setState ( {
            amount: item,
            currency: 'USDollar'

        });

    }

    ausChange(item) {
        this.setState ( {
            amount: item,
            currency: 'AusDollar'

        });

    }

    
    

    render () {
        const currency = this.state.currency;
        const amount = this.state.amount;
        const ausDollar = currency ==='USDollar'? toUSDollar(amount) : amount;
        const usDollar = currency ==='AusDollar'? toAusDollar(amount) : amount;

        return (
            <>
               <p>This app helps you convert Australian 
                   Dollar to US Dollar and vice-versa.</p> 
               <Dollar amount= {usDollar} 
               onChange = {this.usChange}
               money = 'USDollar'
               />
                <Dollar amount= {ausDollar} 
                onChange = {this.ausChange}
                money = "AusDollar"
                />
            </>
        );
    }

}

export default Converter;