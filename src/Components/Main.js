import React, { Component } from "react"

//Imported React-router-dom Components
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Imported Components
import Header from './Header'
import Home from './Home'
import Footer from "./Footer"
import {addData} from '../Redux/actionCreators';

//Makking Constant to get the data of redux store into main file in state
const mapStatetoProps=state=>{
    return{
        data:state.data,
    }
}


const mapDispatchToProps=dispatch=> ({
    addData:(category, name , picture , rating , detail) => dispatch(addData(category, name , picture , rating , detail) )
})

class Main extends Component{

    

    render(){

        const homePage=()=>{
            return(
                <Home data={this.props.data}
                addData={this.props.addData} />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={homePage} />
                    <Redirect to="/home" />
                </Switch>
               
            </div>
        )
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));