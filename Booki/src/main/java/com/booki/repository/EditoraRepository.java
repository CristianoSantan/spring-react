package com.booki.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.booki.models.Editora;

@Repository
public interface EditoraRepository extends JpaRepository<Editora, Long> {

}
