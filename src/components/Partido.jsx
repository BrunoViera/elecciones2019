// @flow

import React from 'react';
import SimplePie from '../charts/SimplePie';

type Props = {
  data: {
    name: string,
    candidates: Array<{ name: string, color: string, votes: number }>
  }
};

export default function Partido(props: Props) {
  const { data: { name, candidates } } = props;

  return (
    <div className="partido-wrapper">
      <h2>{name}</h2>
      <div className="partido">
        <SimplePie data={candidates} name={name} />
      </div>
    </div>
  );
}
