package com.petshop.Controller;

import com.petshop.Model.Breed;
import com.petshop.Repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/breeded_shelter") //menu component in react app page after "/" page
public class BreedController {

    @Autowired
    private BreedRepository breedRepository;

    @GetMapping("/residents")
    public List<Breed> getAllBreeds(){
        return breedRepository.findAll();
    }

    @GetMapping("/residents/group_list/group")
    public ResponseEntity<List<Breed>> getGroupList(@RequestParam String group) {
        return new ResponseEntity<List<Breed>>(breedRepository.findByGroup(group), HttpStatus.OK);
    }

    @GetMapping("/residents/current/breedName")
    public ResponseEntity<List<Breed>> getBreedList(@RequestParam String breedName) {
        return new ResponseEntity<List<Breed>>(breedRepository.findByBreedName(breedName), HttpStatus.OK);
    }


}
