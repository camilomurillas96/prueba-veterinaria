package com.empresa.veterinaria.repository;

import com.empresa.veterinaria.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoriaClinicaRepository extends JpaRepository<HistoriaClinica, Integer> {}