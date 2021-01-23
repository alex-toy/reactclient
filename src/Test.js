import React, { Component } from 'react';
import axios from 'axios';
import Tags from './Tags';
import DerAct from './DerAct';
import QualLead from './QualLead';


class Test extends Component {
  state = {
    prospect : '',
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
    var url = "tcp://10.16.6.213:5000/pred"
    console.log(process.env)
    await axios.post(url, data 
    ).then(function (reponse) {
        console.log(reponse);
    })
    .catch(function (erreur) {
        console.log(erreur);
    });
      this.setState({ index: '' });
    };

  

  render() {
    return (
      <div>
        
        <h1>test connection </h1>
        
        <form onSubmit={this.handleSubmit}>
            
            <p><label>Durée sur site web :</label>
            <input
              value={this.state.index}
              onChange={(event) => this.setState({ index: event.target.value })}
            /></p>
            
            <p>
              <label>Nombre de visites :</label>
              <input
                value={this.state.index}
                onChange={(event) => this.setState({ index: event.target.value })}
              />
            </p>

            <p><Tags /></p>

            <p><DerAct /></p>

            <p><QualLead /></p>
            
            
          <button>Submit</button>
        </form>

      </div>
    );
  }
}

export default Test;
