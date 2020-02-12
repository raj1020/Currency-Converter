import React from 'react';





class Dollar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};
       
    }

     decision () {
         if (this.props.amount >= 1000000 && this.props.money ==='AusDollar') {
             return (<p>You can buy a house in Sydney</p>);
         }

         if (this.props.amount >= 700000 && this.props.money ==='USDollar') {
            return (<p>You can buy a house in Sydney</p>);
        }
         return(<p>You can not buy a house in Sydney</p>);
     } 

    

    render () {

        const currency = this.props.money;
         
        return (
            <div>
                <p>Please input the  {currency} amount</p>
                < input value = {this.props.amount} 
                onChange = {(e) => 
                {this.props.onChange(e.target.value)}} />

                {this.decision()}
            </div>
        );
    }

}


export default Dollar;