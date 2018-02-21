
import React,{ Component } from 'react';
import { connect}  from 'react-redux';
import StripeChaeckout from 'react-stripe-checkout';
import * as actions from '../actions';
class Payment extends Component{
    getToken(token){
        this.props.handleToken(token);
    }   
    render(){
        debugger;
        return(
            <StripeChaeckout stripeKey={process.env.REACT_APP_Publishable_key}  amount={500} token={ (token) => this.getToken(token)}  />
        );
    }
}

export default connect(null,actions)(Payment);