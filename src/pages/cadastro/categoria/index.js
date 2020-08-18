import React , { useState } from 'react'; 
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';


function CadastroCategoria() {

    // let nomeDaCategoria = useState('Filmes'); 

    const [Categorias, setCategorias] = useState(['Teste']); 

    const valoresIniciais = {
      nome: 'categoria inicial',
      descricao: 'descricao inicial',
      cor: '#000',
    };

    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
      //chave : (dinamico/campos) nome, descricao, cor
      setValues(
        {...values,
        [chave]: valor, // nome: 'valor'
      }) 
    }

    function handleChange(infoEvento) {
      setValue(infoEvento.target.getAttribute('name'), 
      infoEvento.target.value
      ); 
    }

    return (
      <PageDefault> 
        <h1>Cadastro de Categoria : {values.nome} </h1>

        <form onSubmit={function handleSubmit(infoEvento) {
            infoEvento.preventDefault();
            setCategorias([
              ...Categorias, 
              values
            ]);

        }}>

        <div>

        <label>
            Nome da Categoria: 
              <input type="text" name="nome" value={values.nome}
              onChange={handleChange}/>
          </label>
        </div>

        <div>
          <label>
            Descrição: 
              <textarea type="text" name="descricao" value={values.descricao}
              onChange={handleChange}/>
          </label>
        </div>

        <div>
          <label>
            Cor: 
              <input type="color" name="cor" value={values.cor}
              onChange={handleChange}/>
          </label>
        </div>

      
          <button>
            Cadastrar 
          </button>


        </form>

        <ul>
        {Categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )

        })}
        </ul>      

       <Link to="/">
        Ir para a Home 
       </Link>

      </PageDefault>
    )
  }

  export default CadastroCategoria; 