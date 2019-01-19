import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice.service';

@Component({
    selector: 'creatuser',
    templateUrl: './AddUser.component.html',
    styleUrls: ['./AddUser.component.css']
})

export class createuser implements OnInit {
    userForm: FormGroup;
    editType: string = "Create";
    title: string = "User Erstellen";
    id: number;
    errorMessage: any;


    constructor(private _formBuilder: FormBuilder, private _activeRoute: ActivatedRoute,private _userService: UserService, private _router: Router) {
        if (this._activeRoute.snapshot.params["id"]) {
            this.id = this._activeRoute.snapshot.params["id"];
        }

        this.userForm = this._formBuilder.group({
            id: 0,
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            age: ['', [Validators.required]],
            city: ['', [Validators.required]],
            mail: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        if (this.id > 0) {
            this.editType = "Edit";
            this.title = "User Bearbeiten";
            this._userService.getUserById(this.id)
                .subscribe(resp => this.userForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }

    save() {

        if (!this.userForm.valid) {
            return;
        }

        if (this.editType == "Create") {
            this._userService.saveUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-user']);
                }, error => this.errorMessage = error)
        }
        else if (this.editType == "Edit") {
            this._userService.updateUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-user']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-user']);
    }


    get firstname() { return this.userForm.get('firstname'); }
    get lastname() { return this.userForm.get('lastname'); }
    get gender() { return this.userForm.get('gender'); }
    get age() { return this.userForm.get('age'); }
    get city() { return this.userForm.get('city'); }
    get mail() { return this.userForm.get('mail'); }
}