import Axios from "axios";
let url = "http://localhost:3000/cars";
function getCars() {
    return Axios.get(url);
}
function getCar(id) {
    return Axios.get(url + "/" + id);
}
function addCar(newcar) {
    return Axios.post(url,newcar);
}
function delCar(id){
    return Axios.delete(url+"/"+id);
}
export const CarService = {
    'getCars': getCars,
    'getCar': getCar,
    'addCar':addCar,
    'delCar':delCar
};
