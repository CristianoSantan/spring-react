import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LivroService from "../../services/LivroService";

export default function Index() {
const [livro, setLivro] = useState([]);

const getAllLivros = () => {
    LivroService.getAllLivros()
    .then((response) => {
        setLivro(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
};


useEffect(() => {
    getAllLivros();
}, []);


const deleteLivro = (id) => {
    LivroService.deleteLivro(id)
      .then((response) => {
        getAllLivros();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };


    return (
        <>
      <header className="header">
        <h1 className="container">Cadastro Livro</h1>
      </header>
      <div className="container py-3">
        <Link to="/Livros-Create" className="btn btn-primary mb-2">
          Criar Livro
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>isbn</th>
                <th>preço</th>
                <th>autor</th>
                <th>editora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {livro.map((livro) => (
                <tr key={livro.id}>
                  <td>{livro.id}</td>
                  <td>{livro.nome}</td>
                  <td>{livro.isbn}</td>
                  <td>{livro.preco}</td>
                  <td>{livro.autor.nome}</td>
                  <td>{livro.editora.nome}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Livros-Update/${livro.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteLivro(livro.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    );
}