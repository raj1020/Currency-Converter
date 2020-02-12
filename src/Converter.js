import React from 'react';
import Dollar from './Dollar';




const currency = {
    USD: 'USDollar',
    AuD: 'AusDollar'
};

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 0,
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

        return (
            <>
               <p>This app helps you convert Australian 
                   Dollar to US Dollar and vice-versa.</p> 
               <Dollar amount= {this.state.amount} 
               onChange = {this.usChange}
               currency = 'AusDollar'
               />
                <Dollar amount= {this.state.amount} 
                onChange = {this.ausChange}
                currency = 'USDollar'
                />
            </>
        );
    }

}

export default Converter;