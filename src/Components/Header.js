import React from 'react'

//Importing Navbar from Reactstrap
import { Navbar,NavbarBrand } from 'reactstrap';


function Header(){
    return(
        <React.Fragment>
            <Navbar className="Navbar">
                <NavbarBrand style={{fontSize:'70px', color:"yellowgreen", fontFamily:"monospace"}}>MDS Menia</NavbarBrand>
            </Navbar>    
        </React.Fragment>
    )
}


export default Header;