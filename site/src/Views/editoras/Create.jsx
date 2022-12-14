import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditoraService from "../../services/EditoraService";

export default function Create() {
  const [nome, setNome] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarAutor = (e) => {
    e.preventDefault();

    const editora = { nome };

    if (id) {
      EditoraService.updateEditora(id, editora).then((response) => {
        navigate("/Editoras");
      });
    } else {
      EditoraService.createEditora(editora).then((response) => {
        navigate("/Editoras");
      });
    }
  };

  useEffect(() => {
    function getEditoraById() {
      if (id) {
        EditoraService.getEditoraById(id)
          .then((response) => {
            setNome(response.data.nome);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getEditoraById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarAutor(e)}
          >
            Enviar
          </button>
          <Link
            to="/Editoras"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}