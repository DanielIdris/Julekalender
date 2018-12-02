import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError} from "rxjs/operators";

@Injectable()
export class KalenderService {
    private url = 'https://julekalender-webservice.cfapps.io';
    //private url = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    getGodJul() {
        return this.http.get(this.url + "/godjul");
    }

    getVinner(passord: string){
        let httpOptions = {
            headers: new HttpHeaders({
                'passord':  passord
            })
        };
        return this.http.get(this.url + "/vinner", httpOptions);
    }

    getDagensVinner(){
        return this.http.get(this.url + "/dagens-vinner");
    }
}