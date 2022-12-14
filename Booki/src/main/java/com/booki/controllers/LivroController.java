package com.booki.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.booki.models.Autor;
import com.booki.models.Editora;
import com.booki.models.Livro;
import com.booki.repository.AutorRepository;
import com.booki.repository.EditoraRepository;
import com.booki.repository.LivroRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/livros")
public class LivroController {
	
	@Autowired
	private LivroRepository livroRepository;
	
	@Autowired
	private AutorRepository autorRepository;
	
	@Autowired
	private EditoraRepository editoraRepository;
	
	@GetMapping
	public ResponseEntity<List<Livro>> findAll() {
		
		List<Livro> livros = livroRepository.findAll();
		
		return ResponseEntity.ok().body(livros);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Livro> findById(@PathVariable Long id) {
		
		Livro livro = livroRepository.findById(id).get();
		
		return ResponseEntity.ok().body(livro);
	}
	
	// CREATE
    @PostMapping
    public Livro createEmployee(@RequestBody Livro livro) {
    	
        return livroRepository.save(livro);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Livro> update(@PathVariable long id,@RequestBody Livro livroDetails ) {
    	Livro updateLivro = livroRepository.findById(id).get();
    	Autor autor = autorRepository.findById(livroDetails.getAutor().getId_autor()).get();
    	Editora editora = editoraRepository.findById(livroDetails.getEditora().getId()).get();

    	updateLivro.setNome(livroDetails.getNome());
    	updateLivro.setIsbn(livroDetails.getIsbn());
    	updateLivro.setPreco(livroDetails.getPreco());
    	updateLivro.setAutor(autor);
    	updateLivro.setEditora(editora);

    	livroRepository.save(updateLivro);

        return ResponseEntity.ok(updateLivro);
    }

    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Livro autor = livroRepository.findById(id).get();

    	livroRepository.delete(autor);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
