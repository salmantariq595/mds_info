import React, { Component } from "react"

//Imported React-router-dom Components
import { Switch,Route,Redirect } from 'react-router-dom';


//Imported Components
import Header from './Header'
import Home from './Home'
import Footer from "./Footer"

class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;