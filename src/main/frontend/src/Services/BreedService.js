import axios from 'axios';

const BREEDS_REST_API_URL = 'https://localhost:8080/breeded_shelter/residents/';
class BreedService{

    getBreeds(){
        return axios.get(BREEDS_REST_API_URL)
    }
}

export default new BreedService;