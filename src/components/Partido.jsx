import React from 'react';
import PropTypes from 'prop-types';

import CandidatosPie from '../charts/CandidatosPie';

export default class Partido extends React.PureComponent {
  render() {
    const { name, candidatos } = this.props;
    return (
      <div className="partido-wrapper">
        <h2>{name}</h2>
        <div className="partido">
          <CandidatosPie data={candidatos} />
        </div>
      </div>
    );
  }
}

Partido.propTypes = {
  name: PropTypes.string.isRequired,
  candidatos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
