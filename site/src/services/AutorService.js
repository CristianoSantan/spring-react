import axios from "axios";

const AUTOR_API_URL = "https://booki-backend.herokuapp.com/autores";


class AutorService {
    // get all
    getAllAutores() {
        return axios.get(AUTOR_API_URL);
    }
    // create
    createAutor(autor) {
        return axios.post(AUTOR_API_URL, autor);
    }
    // get id
    getAutorById(id) {
        return axios.get(AUTOR_API_URL + "/" + id);
    }
    // update
    updateAutor(id, autor) {
        return axios.put(AUTOR_API_URL + "/" + id, autor);
    }
    // delete
    deleteAutor(id) {
        return axios.delete(AUTOR_API_URL + "/" + id);
    }
}

export default new AutorService();