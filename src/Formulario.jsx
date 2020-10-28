import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Formulario = (props) => {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [nome, setNome] = useState(null);
  const [ehCadastro, setEhCadastro] = useState(false);

  const submeter = async () => {
    const response = await fetch(`http://localhost:38000/usuarios/${ehCadastro ? 'cadastro' : 'autentica'}`,
      {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, nome, senha })

      });
    if (response.ok) {
      const data = await response.json();
      const resp = await fetch(`http://localhost:38000/isAdmin`, {
        credentials: "include",
      })

      console.log(await resp.json());
     
    }
    props.login();
  }

  let campoNome = ehCadastro ?
    <FormGroup>
      <Label for="exampleNome">Nome</Label>
      <Input onChange={e => setNome(e.target.value)} value={nome} type="text" name="nome" id="exampleNome" placeholder="Nome placeholder" />
    </FormGroup> : '';

  return (
    <div className="container">
      <div className="row " >
        <Form className="col-md-6">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          {campoNome}

          <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input onChange={e => setSenha(e.target.value)} value={senha} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>

          <Button className="col-md-12" onClick={submeter}>Submit</Button><br /><br />
          <Button className="col-md-12" onClick={e => setEhCadastro(ehCadastro => !ehCadastro)}>Ir para {ehCadastro ? 'Login' : 'Cadastro'}</Button>
        </Form>
      </div>
    </div>
  )
}

export default Formulario;