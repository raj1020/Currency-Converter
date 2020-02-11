import React from 'react';
import USDollar from './USDollar';
import AusDollar from './AusDollar';


class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 0};
    }

    render () {
        return (
            <>
               <p>This app helps you convert Australian Dollar to US Dollar and vice-versa.</p> 
               <USDollar amount= {this.state.amount}/>
      <AusDollar amount= {this.state.amount}/>
            </>
        );
    }

}

export default Converter;