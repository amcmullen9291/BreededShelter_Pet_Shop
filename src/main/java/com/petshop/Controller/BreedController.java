package com.petshop.Controller;

import com.petshop.Exception.ResourceNotFoundException;
import com.petshop.Model.Breed;
import com.petshop.Repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//-====================================================
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/breeded_shelter") //menu component in react app page after "/" page
public class BreedController {

    @Autowired
    private BreedRepository breedRepository;

    //get all breed
    @GetMapping("/residents")
    public List<Breed> getAllBreeds(){
        return breedRepository.findAll();
    }
    // add breed
    //http://localhost:8080/breeded_shelter/addResidents
    @PostMapping("/addResidents")
    public Breed addBreed(@RequestBody Breed theBreed){
        return breedRepository.save(theBreed);
    }
    //update breed by id
   // http://localhost:8080/breeded_shelter/breed/{id}
    @PutMapping("/breed/{id}")
    public ResponseEntity<Breed> updateBreed(@PathVariable(value = "id")long id, @RequestBody Breed breedDetails)
        throws ResourceNotFoundException{
        Breed breed = breedRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + ": not found"));
        //setting updated details for employee
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
    //http://localhost:8080/breeded_shelter/breed/{id}
    @DeleteMapping("/breed/{id}")
    public Map<Long, String> removeBreed(@PathVariable long id)throws ResourceNotFoundException{

        Breed employee = breedRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        breedRepository.delete(employee);
        Map<Long, String> respose = new HashMap<>();
        respose.put(id, "Breed Deleted");
        return respose;
    }


}
