import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CarService {
    baseUrl: string = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getCar() {
        return this.http.get(this.baseUrl + 'api/Car/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCarById(id: number) {
        return this.http.get(this.baseUrl + "api/Car/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveCar(Car) {
        return this.http.post(this.baseUrl + 'api/Car/Create', Car)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    updateCar(Car) {
        return this.http.put(this.baseUrl + 'api/Car/Edit', Car)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteCar(id) {
        return this.http.delete(this.baseUrl + "api/Car/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updatePlate(plate, id) {
        return this.http.put(this.baseUrl + 'api/Car/Plate', plate, id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}