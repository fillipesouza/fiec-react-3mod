import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CriaRifa = (props) => {

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');

    const submeter = async () => {
        const response = await fetch('http://localhost:38000/rifas', {
            method: 'POST',
            credentials: 'include',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                id, nome, foto
            })
        })
        console.log(response);
    }

    return (
        <div className="container">
        <div  className="row " >
        <Form className="col-md-6">
          <FormGroup>
            <Label for="id">ID</Label>
            <Input onChange={e => setId(e.target.value)} type="number" name="email" id="id"  />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input onChange={e => setNome(e.target.value)}  type="text" name="text" id="nome"  />
          </FormGroup>
          <FormGroup>
            <Label for="foto">Foto</Label>
            <Input onChange={e => setFoto(e.target.value)}  type="text" name="foto" id="foto"  />
          </FormGroup>
          
          <Button className="col-md-12" onClick={submeter}>Criar Rifa</Button><br /><br />
          
          </Form>
          </div>
          </div>
    )
}

export default CriaRifa
