
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payment from './payment';
class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <a href="/auth/google">Log in</a>
            default:
            return [<p key="e2e2">Credits: {this.props.auth.credits}</p>, <Payment key="wdwdw"/>, <a key="wfwfwf" href="/api/logout">Log out</a>]
                
           
        }
    }

    render(){
        return(
            <div>
             <div style={{background:"blue",height:"50px",lineHeight:"50px",color:"white"}}>
                 <Link to={this.props.auth ? '/surveys' : '/'}>
                   Organization Logo
                 </Link>
              </div>
              {this.renderContent()}
             
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Header);