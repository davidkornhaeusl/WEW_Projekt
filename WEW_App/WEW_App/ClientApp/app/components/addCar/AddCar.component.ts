import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/carservice.service';

@Component({
    selector: 'createcar',
    templateUrl: './AddCar.component.html',
    styleUrls: ['./AddCar.component.css']
})

export class createcar implements OnInit {
    carForm: FormGroup;
    editType: string = "Create";
    title: string = "Fahrzeug Erstellen";
    id: number;
    errorMessage: any;


    constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute,private carService: CarService, private router: Router) {
        if (this.activeRoute.snapshot.params["id"]) {
            this.id = this.activeRoute.snapshot.params["id"];
        }

        this.carForm = this.formBuilder.group({
            id: 0,
            brand: ['', [Validators.required]],
            type: ['', [Validators.required]],
            year: ['', [Validators.required]],
            plate: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        if (this.id > 0) {
            this.editType = "Edit";
            this.title = "Fahrzeug Bearbeiten";
            this.carService.getCarById(this.id)
                .subscribe(resp => this.carForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }

    save() {

        if (!this.carForm.valid) {
            return;
        }

        if (this.editType == "Create") {
            this.carService.saveCar(this.carForm.value)
                .subscribe((data) => {
                    this.router.navigate(['/fetch-car']);
                }, error => this.errorMessage = error)
        }
        else if (this.editType == "Edit") {
            this.carService.updateCar(this.carForm.value)
                .subscribe((data) => {
                    this.router.navigate(['/fetch-car']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this.router.navigate(['/fetch-car']);
    }


    get brand() { return this.carForm.get('brand'); }
    get type() { return this.carForm.get('type'); }
    get year() { return this.carForm.get('year'); }
    get plate() { return this.carForm.get('plate'); }
}