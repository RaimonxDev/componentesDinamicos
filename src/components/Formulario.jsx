import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const validarDatos = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData);
   }

  return (

    <div>
      <Form onSubmit={(e) => validarDatos(e)} style={{ width: '300px' }}>
        
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            onChange={handleChange}
            value={formData.nombre}
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="email"
            name="correo"
            placeholder="tuemail@ejemplo.com"
            onChange={handleChange}
            value={formData.correo}
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="number"
            min={18}
            name="edad"
            placeholder="edad"
            onChange={handleChange}
            value={formData.edad}
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Control
            className="mb-3"
            type="text"
            name="cargo"
            placeholder="Cargo"
            onChange={handleChange}
            value={formData.cargo}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className="mb-3"
            type="number"
            name="telefono"
            placeholder="telefono +56 9 9999 9999 "
            onChange={handleChange}
            value={formData.telefono}
          />
        </Form.Group>
      
        <Button type="submit" variant="success" className="w-100 mb-2">
          Agregar
        </Button>
      </Form>
    </div>
  )
}
