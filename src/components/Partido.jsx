import React from 'react';
import PropTypes from 'prop-types';

import CandidatosPie from '../charts/CandidatosPie';

export default class Partido extends React.PureComponent {
  render() {
    const { name } = this.props.data;
    return (
      <div className="partido-wrapper">
        <h2>{name}</h2>
        <div className="partido">
          <CandidatosPie data={this.props.data.candidates} />
        </div>
      </div>
    );
  }
}

// Partido.propTypes = {
//   data: PropTypes.objectOf,
// };
