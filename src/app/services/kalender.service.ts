import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class KalenderService {
    private url = 'https://julekalender-webservice.cfapps.io';
    //private url = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    getGodJul() {
        return this.http.get(this.url + "/godjul");
    }

    getVinner(){
        return this.http.get(this.url + "/vinner");
    }
}