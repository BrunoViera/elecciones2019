// @flow

import React from 'react';
import SimplePie from '../charts/SimplePie';
import CandidatosBar from '../charts/CandidatosBar';

type Props = {
  data: {
    general: any,
    partidos: Array<{
      name: string,
      candidates: Array<{ name: string, color: string, votes: number }>
    }>
  }
};

export default function Nacional(props: Props) {
  const {
    data,
    data: { partidos },
  } = props;
  let candidatos = [];

  partidos.forEach((partido) => {
    candidatos = candidatos.concat(partido.candidates);
  });

  candidatos.sort((a, b) => b.votes - a.votes);

  return (
    <div className="partido-wrapper">
      <h2>Nivel País</h2>
      <div className="partido">
        <h3>
          Total de Votos recibidos
          {' '}
          {data.general.total.toLocaleString()}
        </h3>
        <SimplePie data={data.general.info} name="nivel_nacional_resumen" />
        <CandidatosBar data={candidatos} name="test" />
      </div>
    </div>
  );
}
