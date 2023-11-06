/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
export const Listado = ({ colaboradores }) => {
    return (
    <>
    <Table bordered hover>
      <thead>
      <tr>
        {
          Object.entries(colaboradores[0]).map(([key, _]) => {
          return <th key={key} className='text-capitalize' >{key}</th>
          })
        }
    </tr>
      </thead>
      <tbody>
        {colaboradores.map(c => (
         <tr key={c.id}>
          <td>{c.id }</td>
          <td>{ c.nombre}</td>
          <td> { c.correo}</td>
          <td> { c.edad}</td>
          <td> { c.cargo}</td>
          <td> { c.telefono}</td>
        </tr>
        )
        )}
        
      </tbody>
      </Table>
    </>
  )
}
