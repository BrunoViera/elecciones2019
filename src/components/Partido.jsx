// @flow

import React from 'react';
// import CandidatosPie from '../charts/CandidatosPie';

type Props = {
  data: {
    name: string,
    candidates: Array<{ name: string, color: string, votes: number }>
  }
};

export default function Partido(props: Props) {
  const { data: { name, candidates } } = props;
  console.log(candidates);


  return (
    <div className="partido-wrapper">
      <h2>{name}</h2>
      <div className="partido">
        {/* <CandidatosPie data={this.props.data.candidates} /> */}
      </div>
    </div>
  );
}
