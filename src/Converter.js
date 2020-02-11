import React from 'react';
import Dollar from './Dollar';


class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 0};
    }

    globalChange(item) {
        this.setState ( {
            amount: item

        });

    }

    render () {
        return (
            <>
               <p>This app helps you convert Australian Dollar to US Dollar and vice-versa.</p> 
               <Dollar amount= {this.state.amount} globalChange = {this.globalChange.bind(this)}/>
      <Dollar amount= {this.state.amount} globalChange = {this.globalChange.bind(this)}/>
            </>
        );
    }

}

export default Converter;