import axios from 'axios';

let BREEDS_REST_API_URL = 'http://localhost:8080/breeded_shelter/residents';

class BreedService{

    getBreeds(){
        return axios.get(BREEDS_REST_API_URL);
    }
}

export default new BreedService();