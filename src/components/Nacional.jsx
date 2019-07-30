import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CandidatosPie from '../charts/CandidatosPie';

import data from '../../data/ResumenGeneral_D.json';
import colors from '../../data/colors.json';

const chartData = [];
const pieData = [];
const globalData = data[0];
globalData.sdtTotalPorConvocatoria.forEach((conv) => {
  chartData.push({ name: conv.LemaNombre, votes: conv.Cantidad, color: colors[conv.ConvId] });
});

pieData.push({ name: 'Votos En Blanco', votes: 5436, color: '#f6f2f1' });
pieData.push({ name: 'Votos Anulados', votes: 7478, color: '#e1dddc' });
pieData.push({ name: 'Votos Observados', votes: 21191, color: '#e8e7ea' });
pieData.push({ name: 'Votos ObsRechazados', votes: 634, color: '#a8a9a4' });
pieData.push({ name: 'Total Votos Emitidos', votes: 1078992, color: '#8ea6b4' });

chartData.sort((a, b) => b.votes - a.votes);

const mapStateToProps = state => ({ title: state.departamento });

class Nacional extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className="partido-wrapper">
        <h2>{title}</h2>
        <div className="partido">
          <CandidatosPie data={pieData} />
          <CandidatosPie data={chartData} />
        </div>
      </div>
    );
  }
}

Nacional.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Nacional);
