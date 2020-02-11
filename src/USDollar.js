import React from 'react';


class USDollar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};
    }

    render () {
        return (
            <>
                <p>Please input the USDollar amount</p>
                <input value = {this.props.amount}  />
            </>
        );
    }

}

export default USDollar;