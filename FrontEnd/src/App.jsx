// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gqlLogo from './assets/gql.svg'
import './App.css'

import { useQuery, gql, useMutation } from "@apollo/client";

function App() {

  // Define query
  const CLIENTES_QUERY = gql`
    query{
      findAllCliente {
        id name email
      }
    }
  `;
  const { data } = useQuery(CLIENTES_QUERY);

  //console.log("data:",data)

  // Define mutation
  const REMOVE_CLIENTE = gql`
    mutation RemoveCliente($input: String!){
      deleteCliente(id: $input) {
        id name
      }
    }  `;
  const [mutateFunction] = useMutation(REMOVE_CLIENTE);

  // remove todo handler
  const removeHandler = id => {
    mutateFunction(
      {
        variables: { input: id },
        refetchQueries: [ { query: CLIENTES_QUERY }]
      }
    )
    .then(res => {
      if (res && res.data && res.data.removeCliente && res.data.removeCliente.id === id) {
        // say we want to display a message that a todo was removed
        console.log("Cliente removido");
      }
    });
  }



  return (
    <>

      <h1>React + GraphQL</h1>  

      <h2 className='titulo'>Lista de Clientes</h2>
      {
        data && data.findAllCliente && data.findAllCliente.map((i, index) => (
          <div
            className={"item"}
            key={i.id}
          >
            <span>
              <strong>{index + 1})</strong> {i.name}
            </span>
            <button className='botao'
              onClick={() => removeHandler(i.id)}
            >
              Delete
            </button>
          </div>
        ))
      }

    </>
  )
}

export default App
