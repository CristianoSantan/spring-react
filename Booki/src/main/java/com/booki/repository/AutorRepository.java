package com.booki.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.booki.models.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {

}
