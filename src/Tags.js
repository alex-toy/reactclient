import React, { Component } from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Ne pas suivre de formation continue'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Votre parfum favori est : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Tags :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ne pas suivre de formation continue">Ne pas suivre de formation continue</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
      </form>
    );
  }
}


export default Tags