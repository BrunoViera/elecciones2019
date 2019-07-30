import { CHANGE_DEPARTAMENTO } from '../actions/actions';

const initialState = {
  departamento: 'Nivel Nacional',
};

function changeDepartamento(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DEPARTAMENTO:
      return { departamento: action.departamento };
    default:
      return state;
  }
}

export default changeDepartamento;
