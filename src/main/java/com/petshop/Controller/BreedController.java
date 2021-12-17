package com.petshop.Controller;

import com.petshop.Exception.ResourceNotFoundException;
import com.petshop.Model.Breed;
import com.petshop.Repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/breeded_shelter")
public class BreedController {

    @Autowired
    private BreedRepository breedRepository;

    @GetMapping("/residents")
    public List<Breed> getAllBreeds(){
        return breedRepository.findAll();
    }

    @PostMapping("/addResidents")
    public Breed addBreed(@RequestBody Breed theBreed){
        return breedRepository.save(theBreed);
    }

    @PutMapping("/breed/{id}")
    public ResponseEntity<Breed> updateBreed(@PathVariable(value = "id")long id, @RequestBody Breed breedDetails)
            throws ResourceNotFoundException{
        Breed breed = breedRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + ": not found"));

        breed.setBreedName(breedDetails.getBreedName());
        breed.setAge(breedDetails.getAge());
        breed.setGender(breedDetails.getGender());
        breed.setAlt(breedDetails.getAlt());
        breed.setGroup(breedDetails.getGroup());
        breed.setAssignedStaff(breedDetails.getAssignedStaff());
        breed.setResidentsName(breedDetails.getResidentsName());
        breed.setImage1(breedDetails.getImage1());
        breed.setImage2(breedDetails.getImage2());

        final Breed updateBreed = breedRepository.save(breed);

        return ResponseEntity.ok(updateBreed);
    }

    @DeleteMapping("/breed/{id}")
    public Map<Long, String> removeBreed(@PathVariable long id)throws ResourceNotFoundException {

        Breed employee = breedRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        breedRepository.delete(employee);
        Map<Long, String> response = new HashMap<>();
        response.put(id, "Breed Deleted");
        return response;
    }

    @GetMapping("breed/{id}")
    public Map<Long, Breed> selectedBreed(@PathVariable long id)throws ResourceNotFoundException{
        Breed breed = breedRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        Map<Long, Breed> response = new HashMap<>();
        response.put(id, breed);
        return response;
    }

    @GetMapping("/residents/group_list/{group}")
    public List<Breed> getGroupList(@PathVariable String group)throws ResourceNotFoundException {

        List<Breed> response = breedRepository.findByGroup(group);
        return response;
    }

    @GetMapping("/residents/breed_list/{breed}")
    public List<Breed> getBreedList(@PathVariable String breed)throws ResourceNotFoundException {

        List<Breed> response = breedRepository.findByBreedName(breed);
        return response;
    }

}