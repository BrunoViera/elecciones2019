import React from 'react';
import { connect } from 'react-redux';

import Partido from './Partido';
import Nacional from './Nacional';
import Busqueda from './Busqueda';

import candidatosInfo from '../../data/colorsCandidatos.json';
import dataPartidoNacional from '../../data/ResumenConvocatoria_PAIS_INTERNAODN_D_6.json';
import dataFrenteAmplio from '../../data/ResumenConvocatoria_PAIS_INTERNAODN_D_2.json';
import dataPartidoColorado from '../../data/ResumenConvocatoria_PAIS_INTERNAODN_D_4.json';

function getCandidatosData(data) {
  const candidatos = [];
  data.Lemas.forEach((lema) => {
    candidatosInfo[lema.Id].votes = lema.Total;
    candidatos.push(candidatosInfo[lema.Id]);
  });

  return candidatos.sort((a, b) => b.votes - a.votes);
}

const mapStateToProps = state => ({ title: state.departamento });

class App extends React.PureComponent {
  componentDidUpdate(e) {
    console.log('app mount');
  }

  render() {
    return (
      <div className="site-section app">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12" data-aos="fade-up">
              <div className="site-section-heading">
                <Busqueda />

                <Nacional title="Nivel Nacional" />

                <Partido
                  name="Interna Partido Nacional"
                  candidatos={getCandidatosData(dataPartidoNacional)}
                />

                <Partido
                  name="Interna Frente Amplio"
                  candidatos={getCandidatosData(dataFrenteAmplio)}
                />

                <Partido
                  name="Interna Partido Colorado"
                  candidatos={getCandidatosData(dataPartidoColorado)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
