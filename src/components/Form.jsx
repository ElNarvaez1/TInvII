import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        //{ value: "none", name: "Seleccione..." },
        { value: "Deal Rating", name: "Calificación de la oferta" },
        { value: "Title", name: "Titulo" },
        { value: "Savings", name: "Ahorros" },
        { value: "Price", name: "Precio" },
        { value: "Metacritic", name: "Metacrítico" },
        { value: "Reviews", name: "Reseñas" },
        { value: "Release", name: "Lanzamientos" },
        { value: "Store", name: "Tienda" },
        { value: "recent", name: "Recientes" },
      ],
      textInput:(this.props.nameGame)?this.props.nameGame:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //alert("asxcaxsasx");
    let  value = document.getElementById('inputGame').value;
    if(value){
      let filter = document.getElementById('filter');
      let filterGame = null;
      if(filter.value === 'none'){
        filterGame = "Deal Rating";
      }else{
        filterGame = filter.value;
      }

      e.target.action = `#/${value}/0/${filterGame}/`;
      
      window.location.href = e.target.action;
      //window.location.reload();
      e.target.submit();
      window.location.reload();
    }
  }

  handleChange = (e) =>{
    this.setState((prev)=>({
      textInput:e.target.value
    }));
  }


  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3 justify-content-between">
            <div className="col-md-6 col-sm-12 col-12 my-2">
              <input
                type="text"
                className="form-control px-4 col-md-6"
                placeholder="Nombre del juego"
                id="inputGame"
                onChange={this.handleChange}
                value={ this.state.textInput}
              />
            </div>
            <div className="col-md-2 col-sm-12 col-12 my-2">
              <select
                className="form-select text-secondary px-3"
                id="filter"
                defaultValue={(this.props.filter)?this.props.filter:"none"}
              >
                <option value="none" selected>
                  Seleccione...
                </option>
                {this.state.values.map((element) => (
                  <option value={element.value} key={element.value}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3 col-sm-12 col-12 my-2">
              <button
                className="btn btn-outline-secondary w-100"
                type="submit"
                id=""
              >
                ¡Voy a tener suerte!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
