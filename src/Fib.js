import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmitold = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    var data = {
        "DERNIERE_ACTIVITE" : "Email ouvert",
        "DUREE_SUR_SITEWEB" : 0,
        "NB_VISITES" : 0,
        "TAGS" : "Ne pas suivre de formation continue",
        "QUALITE_LEAD" : "Pourrait être pertinent"
    }
    console.log(data)

    await axios.post('/pred', {
      index: data,
    });
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
            
            <p><label>Durée sur site web :</label>
            <input
              value={this.state.index}
              onChange={(event) => this.setState({ index: event.target.value })}
            /></p>
            
            <p><label>Nombre de visites :</label>
            <input
              value={this.state.index}
              onChange={(event) => this.setState({ index: event.target.value })}
            /></p>
            
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
