import React from 'react';



class Dollar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};
       
    }

    

    render () {
        return (
            <div>
                <p>Please input the  Dollar amount</p>
                < input value = {this.props.amount} onChange = {(e) => {this.props.globalChange(e.target.value)}} />
            </div>
        );
    }

}


export default Dollar;