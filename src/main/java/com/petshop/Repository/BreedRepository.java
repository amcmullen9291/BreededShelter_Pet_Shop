package com.petshop.Repository;

import com.petshop.Model.Breed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreedRepository extends JpaRepository<Breed, Long> {
    List<Breed> findByGroup(String group);

    List<Breed> findByBreedName(String breed_name);

}
