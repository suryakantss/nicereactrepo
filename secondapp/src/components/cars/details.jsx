import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CarService } from "./cars.service";

export function Details(){
    let params = useParams();
    let [car,setCar] = useState({});

    useEffect(()=>{
        CarService.getCar(params.id).then(res=>{    
            setCar(res.data[0]);
        }).catch(err=>{
            alert(err);
        });
    },[params.id])
    return (
        <div>
            <h3>Details : {car.id},{car.make},{car.model},{car.variant}</h3>
        </div>
    )
}