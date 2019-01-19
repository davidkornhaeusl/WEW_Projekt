import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../../services/userservice.service'

@Component({
    selector: 'fetchuser',
    templateUrl: './fetchuser.component.html',
    styleUrls: ['./fetchuser.component.css']
})

export class FetchUserComponent {
    public userList: UserData[];

    constructor(public http: Http, private _userService: UserService) {
        this.getUser();
    }

    getUser() {
        this._userService.getUser().subscribe(
            data => this.userList = data
        )
    }

    delete(userID) {
        var ans = confirm("Benutzer mit der Id: " + userID +" löschen");
        if (ans) {
            this._userService.deleteUser(userID).subscribe((data) => {
                this.getUser();
            }, error => console.error(error)) 
        }
    }

    send(mail) {
        var ans = confirm("Email senden an: " + mail);
        if (ans) {
            this._userService.sendMail(mail).subscribe((data) => {
                alert('OK');
            }, error => console.error(error))
        }
    }
}

interface UserData {
    id: number;
    name: string;
    gender: string;
    department: string;
    city: string;
}