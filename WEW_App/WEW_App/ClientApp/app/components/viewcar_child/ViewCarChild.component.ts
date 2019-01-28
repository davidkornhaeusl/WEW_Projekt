import { Component, Input } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from '../../services/userservice.service';

@Component({
    selector: 'showCarChild',
    templateUrl: './ViewCarChild.component.html',
    styleUrls: ['./ViewCarChild.component.css']
})

export class showCarChild {
    @Input() item: UserData;
    public carItem: CarData;

    constructor(public http: Http, private _userService: UserService) {

    }

    delete() {
        this.item.carId = 0;
        this._userService.updateUser(this.item)
            .subscribe((data) => {
                alert("Auto wurde freigegeben");
            }, error => alert("Fehler bei der Freigabe des Autos")
            )
    }

    generate() {
        this.item.carId = 0;
        this._userService.updateUser(this.item)
            .subscribe((data) => {
                alert("Auto wurde freigegeben");
            }, error => alert("Fehler bei der Freigabe des Autos")
            )
    }
}