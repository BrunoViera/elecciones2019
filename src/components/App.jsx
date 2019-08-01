// @flow

import * as React from 'react';
import Partido from './Partido';
import Nacional from './Nacional';

type Props = {
  data: {
    general: any,
    partidos: Array<{
      name: string,
      candidates: Array<{ name: string, color: string, votes: number }>
    }>
  }
};

export default function App(props: Props) {
  const {
    data,
    data: { partidos },
  } = props;

  const partidosList = partidos
    .map(partido => <Partido key={partido.name} data={partido} name={partido.name} />);

  return (
    <div className="site-section app">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12" data-aos="fade-up">
            <div className="site-section-heading">
              <Nacional data={data} />

              {partidosList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
