
import React,{ Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header';
import * as actions from './actions';
import Dashboard from './components/dashboard';
import Surveynew from './components/surveynew';
import Landing from './components/landing';
import  '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
class App extends Component{

    componentDidMount(){
        this.props.fetchUser();

    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                         {/* this.props.auth ?   <PrivateRoute authenticated={this.props.auth} path='/surveys' component={Dashboard} /> : ''*/}
                        <Route path="/" exact={true} component={Landing} />
                        <Route path="/surveys" exact={true} component={Dashboard} />
                        <Route path="/surveys/new" component={Surveynew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

function PrivateRoute ({component: Component, authenticated, ...rest}) {
  
    return (
      <Route
        {...rest}
        render = {(props) => {
            if(authenticated){
                console.log(props.auth);
                return <Component {...props} />
            }else{
               return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
        }}
        
      />
    )
}

function mapStateToProps(state){
    console.log(state.auth);
   return {auth: state.auth}
}

export default connect(mapStateToProps, actions,  null, { pure: false }) (App);