import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDepartamento } from '../actions/actions';

function mapDispatchToProps(dispatch) {
  return {
    changeDepartamento: departamento => dispatch(changeDepartamento(departamento)),
  };
}

class Busqueda extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.departamentos = ['Todo el país', 'ARTIGAS', 'CANELONES', 'CERRO LARGO', 'COLONIA', 'DURAZNO',
      'FLORES', 'FLORIDA', 'LAVALLEJA', 'MALDONADO', 'MONTEVIDEO', 'PAYSANDU', 'RIO NEGRO', 'RIVERA',
      'ROCHA', 'SALTO', 'SAN JOSE', 'SORIANO', 'TACUAREMBO', 'TREINTA Y TRES'];

    this.state = {
      list: [],
      inputValue: '',
    };
  }

  handleClick(e) {
    this.setState({
      list: [],
      inputValue: '',
    });
    this.props.changeDepartamento(e.target.dataset.key);
  }

  handleChange(event) {
    const newList = [];

    if (event.target.value.length > 0) {
      this.departamentos.forEach((item) => {
        if (item.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
          newList.push(item);
        }
      });
    }

    this.setState({
      list: newList,
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    const { list } = this.state;

    return (
      <div className="search-form">
        <h2>Buscar resultados por departamento</h2>
        <div className="partido">
          <div className="form-group">
            <input
              id="inputValue"
              type="text"
              className="search-input form-control form-control-lg"
              placeholder="Buscar por departamento"
              onChange={this.handleChange}
              value={inputValue}
            />
          </div>
          <section className="section">
            <ul className="search-list">
              {list.map(item => (
                <li key={item}>
                  <a
                    data-key={item}
                    href={`#${item.toLocaleLowerCase()}`}
                    onClick={this.handleClick}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

Busqueda.propTypes = {
  changeDepartamento: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Busqueda);
