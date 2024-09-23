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
const BasicModal=()=> {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [id, setId] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreate = () => {
    let newProduct = {

    }
  }; 

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
            Ingrese nombre: <input></input>
            Ingrese url imagen: <input></input>
            Descripcion: <input></input>
            Precio: <input></input>
            Id: <input></input>
          </Typography>
          <Button onClick={handleCreate}>Create</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;