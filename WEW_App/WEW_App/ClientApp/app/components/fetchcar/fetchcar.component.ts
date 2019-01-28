import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { CarService } from '../../services/carservice.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'fetchcar',
    templateUrl: './fetchcar.component.html',
    styleUrls: ['./fetchcar.component.css']
})

export class FetchCarComponent {
    public carList: CarData[];
    entry_plate: boolean = false;
    plate: string;
    carForm: FormGroup;
    errorMessage: any;
    id: number;

    constructor(public http: Http, private carService: CarService, private formBuilder: FormBuilder, private router: Router) {
        this.getCar();

        this.carForm = this.formBuilder.group({
            id: 0,
            brand: ['', [Validators.required]],
            type: ['', [Validators.required]],
            year: ['', [Validators.required]],
            plate: ['', [Validators.required]]
        })
    }

    getCar() {
        this.carService.getCar().subscribe(
            data => this.carList = data
        )
    }

    delete(carID) {
        var ans = confirm("Fahrzeug mit der Id: " + carID +" löschen");
        if (ans) {
            this.carService.deleteCar(carID).subscribe((data) => {
                this.getCar();
            }, error => console.error(error)) 
        }
    }

    enablePlate(id, plate) {
        this.entry_plate = true;
        this.plate = plate
        this.id = id;
    }

    disablePlate(id, plate) {
        this.entry_plate = false;
        this.plate = plate
        this.id = id;
    }

    updatePlate() {
        this.carService.updatePlate(this.plate, this.id)
            .subscribe((data) => {
                this.router.navigate(['/fetch-car']);
            }, error => this.errorMessage = error);
        this.entry_plate = false;
    }
    
}

interface CarData {
    id: number;
    brand: string;
    type: string;
    year: string;
    plate: string;
}