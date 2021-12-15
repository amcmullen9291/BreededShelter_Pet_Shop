package com.petshop.Controller;

import com.petshop.Model.Breed;
import com.petshop.Repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/breeded_shelter") //menu on react page and "/" page
public class BreedController {

    @Autowired
    private BreedRepository breedRepository;

    @GetMapping("/residents")
    public List<Breed> getAllBreeds(){
        return breedRepository.findAll();
    }
}
