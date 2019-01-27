import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { CarService } from '../../services/carservice.service'

@Component({
    selector: 'fetchcar',
    templateUrl: './fetchcar.component.html',
    styleUrls: ['./fetchcar.component.css']
})

export class FetchCarComponent {
    public carList: CarData[];
    plate: string;

    constructor(public http: Http, private carService: CarService, public dialog: MatDialog) {
        this.getCar();
    }

    getCar() {
        this.carService.getCar().subscribe(
            data => this.carList = data
        )
    }

    delete(carID) {
        var ans = confirm("Farhzeug mit der Id: " + carID +" löschen");
        if (ans) {
            this.carService.deleteCar(carID).subscribe((data) => {
                this.getCar();
            }, error => console.error(error)) 
        }
    }

    updatePlate(id) {

    }
    
}

interface CarData {
    id: number;
    brand: string;
    type: string;
    year: string;
    plate: string;
}