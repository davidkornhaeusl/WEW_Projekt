import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
    _baseUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    getUser() {
        return this._http.get(this._baseUrl + 'api/User/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getUserById(id: number) {
        return this._http.get(this._baseUrl + "api/User/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveUser(User) {
        return this._http.post(this._baseUrl + 'api/User/Create', User)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    updateUser(User) {
        return this._http.put(this._baseUrl + 'api/User/Edit', User)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteUser(id) {
        return this._http.delete(this._baseUrl + "api/User/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCarById(id: number) {
        return this._http.get(this._baseUrl + "api/User/CarDetails/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    sendMail(mail) {
        return this._http.get(this._baseUrl + "api/User/Send/" + mail)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}