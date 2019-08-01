// @flow

import React from 'react';
// import CandidatosPie from '../charts/CandidatosPie';

type Props = {
  data: Array<{ name: string, votes: number }>
};

export default function Nacional(props: Props) {
  const { data } = props;
  console.log(data);

  return (
    <div className="partido-wrapper">
      <h2>Nivel País</h2>
      <div className="partido">
        {/* <CandidatosPie data={this.props.data} /> */}
        {/* <CandidatosPie data={chartData} /> */}
      </div>
    </div>
  );
}
