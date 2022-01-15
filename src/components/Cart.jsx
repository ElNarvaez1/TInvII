import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      URL_DEALS: `https://www.cheapshark.com/redirect?dealID`,
      nameStore: "",
      dealsPrimarys:[]
    };
    this.testFunction = this.testFunction.bind(this);
  }
  testFunction(deal) {
    for (let index = 0; index < this.props.stors.length; index++) {
      const stor = this.props.stors[index];
      if (stor.storeID == deal.storeID) {
        return stor.storeName;
      }
    }
  }
  componentDidMount() {
    let dealsPrimarysTemp = [];
    if(this.props.game.deals.length>3){
      dealsPrimarysTemp = [
          this.props.game.deals[0],
          this.props.game.deals[1],
          this.props.game.deals[2]
      ];
    }else{
      dealsPrimarysTemp = this.props.game.deals; 
    }
    this.setState({dealsPrimarys:dealsPrimarysTemp});
  }

  render() {
    return (
      <div className="card mb-3 col-md-5 col-sm-6 col-8 mx-2 mb-5 border-dark" >
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={this.props.game.info.thumb}
              className="img-fluid rounded-start img-card"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-3">{this.props.game.info.title}</h5>
              <ul className="list-unstyled">
                {this.state.dealsPrimarys.map((deal, index) => (
                  <li
                    key={index}
                    className="py-1 d-flex justify-content-between align-items-center list-group-item"
                  >
                    <span className="">{this.testFunction(deal)}</span>
                    <a
                      href={this.state.URL_DEALS + "=" + deal.dealID}
                      target="_blank"
                      className="btn btn-outline-light"
                    >
                      $ {deal.price} USD
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
