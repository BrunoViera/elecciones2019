import React from 'react';

import Partido from './Partido';
import Nacional from './Nacional';

export default class App extends React.PureComponent {
  render() {
    const { general } = this.props.data;
    const partidosList = this.props.data.partidos.sort((a, b) => b.votes - a.votes).map(partido => (
      <Partido key={partido.name} data={partido} />
    ));

    return (
      <div className="site-section app">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12" data-aos="fade-up">
              <div className="site-section-heading">
                <Nacional data={general} />

                {partidosList}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
