import React from 'react';
// import PropTypes from 'prop-types';
import CandidatosPie from '../charts/CandidatosPie';

export default class Nacional extends React.PureComponent {
  render() {
    return (
      <div className="partido-wrapper">
        <h2>Nivel País</h2>
        <div className="partido">
          <CandidatosPie data={this.props.data} />
          {/* <CandidatosPie data={chartData} /> */}
        </div>
      </div>
    );
  }
}

// Nacional.propTypes = {
// };
