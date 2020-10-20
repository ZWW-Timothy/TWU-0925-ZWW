import React, {Component} from 'react';
import './AddItem.css';
import 'bootstrap/dist/css/bootstrap.css'

class AddItem extends Component {
  state = {
    name: "",
    price: "",
    unit: "",
    img: "",
  }

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>添加商品</h1>
        <form className="addItem" onSubmit={(e) => this.handleSubmit(e)}>

          <div className="form-group">
          <span className="signal">* </span><span htmlFor="name">名称</span>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleFieldChange("name", e)}
              className="form-control"
              id="name"
              placeholder="名称"
            />
          </div>

          <div className="form-group">
          <span className="signal">* </span><span htmlFor="price">价格</span>
            <input
              type="text"
              value={this.state.price}
              onChange={(e) => this.handleFieldChange("price", e)}
              className="form-control"
              id="price"
              placeholder="价格"
            />
          </div>

          <div className="form-group">
          <span className="signal">* </span><span htmlFor="unit">单位</span>
            <input
              type="text"
              value={this.state.unit}
              onChange={(e) => this.handleFieldChange("unit", e)}
              className="form-control"
              id="unit"
              placeholder="单位"
            />
          </div>

          <div className="form-group">
          <span className="signal">* </span> <span htmlFor="img">图片</span>
            <input
              type="text"
              value={this.state.img}
              onChange={(e) => this.handleFieldChange("img", e)}
              className="form-control"
              id="img"
              placeholder="URL"
            />
          </div>

          <input
            disabled={!this.state.name || !this.state.price || !this.state.unit || !this.state.img}
            type="submit"
            value="Submit"
            className="btn btn-primary btn-lg"
          />

        </form>
      </div>
    );
  }
}

export default AddItem;
