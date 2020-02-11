import React from 'react';



class AusDollar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};
    }

    render () {
        return (
            <>
                <p>Please input the Australian Dollar amount</p>
                <input value = {this.props.amount} />
            </>
        );
    }

}

export default AusDollar;