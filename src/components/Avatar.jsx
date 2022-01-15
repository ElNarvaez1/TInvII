import React, { Component } from 'react'

export default class Avatar extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <div className="col-md-4 col-sm-10 my-4">
                <article className="d-flex flex-column align-items-center">
                    <img src={this.props.avatar} className="img-avatar rounded-circle mb-3"/>
                    <h2 className="h4 mb-3">{this.props.nombre}</h2>
                    <p>{this.props.descripcion}</p>
                </article>
            </div>
        )
    }
}
