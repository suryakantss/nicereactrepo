import { useEffect, useRef, useState } from "react"
import { CarService } from "./cars.service";
import { Link, Outlet } from "react-router";
import './cars.css';
export default function Cars() {
    let [data, setData] = useState([]);
    let idref = useRef();
    let makeref = useRef();
    let modelref = useRef();
    let variantref = useRef();

    function load() {
        CarService.getCars().then(res => {
            setData(res.data);
        }).catch(err => {
            alert(err);
        });
    }
    useEffect(() => {
        load();
    }, []);

    function addCar() {
        let newcar = {
            'id': idref.current.value,
            'make': makeref.current.value,
            'model': modelref.current.value,
            'variant': variantref.current.value
        };
        CarService.addCar(newcar).then(res => {
            alert(res.data.make + " saved...");
            load();
            idref.current.value = '';
            makeref.current.value = '';
            modelref.current.value = '';
            variantref.current.value = '';
        }).catch(err => alert(err));
    }
    function delCar(id) {
        CarService.delCar(id).then(res => {
            alert(res.data.make + " deleted...");
            load();
        }).catch(err => alert(err));
    }
    return (
        <div>
            <h3> Products</h3>
            <table>
                <thead>
                    <tr><th>Id</th><th>Make</th><th>Model</th><th>Variant</th></tr>
                </thead>
                <tbody>
                    {data.map(c => <tr key={c.id}><td><Link to={`details/${c.id}`}>{c.id}</Link><button onClick={() => delCar(c.id)}>X</button></td><td>{c.make}</td><td>{c.model}</td><td>{c.variant}</td></tr>)}
                    <tr>
                        <th><input type="text" ref={idref}></input></th>
                        <th><input type="text" ref={makeref}></input></th>
                        <th><input type="text" ref={modelref}></input></th>
                        <th><input type="text" ref={variantref}></input></th>
                    </tr>
                    <tr><th colSpan='4'><button onClick={addCar}>Add</button></th></tr>
                </tbody>
            </table>
            <div>
                <Outlet></Outlet>
            </div>
        </div>

    )
}