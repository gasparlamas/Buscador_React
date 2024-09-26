import _default from "@emotion/styled";
import {
    Card as CardMui,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";
import {Box} from "@mui/material";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BasicModal=({addProduct})=> {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [id, setId] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleChangeImagen = (event) => {
    setImagen(event.target.value);
  };
  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleChangePrecio = (event) => {
    setPrecio(event.target.value);
  };
  const handleChangeId = (event) => {
    setId(event.target.value);
  };
  
  const handleCreate = () => {
    let product =  {
      id: 4352,
      name: nombre,
      description: desc,
      image:
        imagen,
      price: precio,
    }
    addProduct((prev)=>{
       const newProducts =[...prev];
      newProducts.push(product);
    return newProducts;
    });
    handleClose();
  }

 

  return (

    <div>
      
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
      

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingrese nombre: <input
          type="text"
          value={nombre}
          onChange={handleChangeNombre}
          placeholder="Cambiar nombre"
        />
            Ingrese url imagen: <input
          type="text"
          value={imagen}
          onChange={handleChangeImagen}
          placeholder="Cambiar nombre"
        />
            Descripcion: <input
          type="text"
          value={desc}
          onChange={handleChangeDesc}
          placeholder="Cambiar nombre"
        />
            Precio: <input
          type="text"
          value={precio}
          onChange={handleChangePrecio}
          placeholder="Cambiar nombre"
        />
            Id: <input
          type="text"
          value={id}
          onChange={handleChangeId}
          placeholder="Cambiar nombre"
        />
          </Typography>
          <Button onClick={handleCreate}>Create</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;