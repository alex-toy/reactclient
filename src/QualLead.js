import React, { Component } from 'react';

class QualLead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Pourrait être pertinent'};

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
        Qualité lead :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Pourrait être pertinent">Pourrait être pertinent</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
      </form>
    );
  }
}


export default QualLead