/**
 * 
 * @author Narvaez Ruiz Alexis
 * 
 * Archivo principal.
 */
import React, { Component } from 'react'
import Header from '../components/Header'

export default class Main extends Component {
    constructor(props){
        this.super(props);
    }

    render() {
        return (
            <div>
              {/*-------------Header-----------------*/} 
              <Header/>  
            </div>
        )
    };
}

 

