export const CHANGE_DEPARTAMENTO = 'CHANGE_DEPARTAMENTO';

export function changeDepartamento(departamento) {
  return { type: CHANGE_DEPARTAMENTO, departamento };
}
