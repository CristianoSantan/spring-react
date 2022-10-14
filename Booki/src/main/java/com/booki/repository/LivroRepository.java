package com.booki.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.booki.models.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {

}
