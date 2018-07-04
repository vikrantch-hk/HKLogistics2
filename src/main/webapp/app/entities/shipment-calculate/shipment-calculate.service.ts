import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShipmentCalculateService {
    private resourceUrl = SERVER_API_URL + 'api/shipment-calculate';
    
    constructor(private http: HttpClient) {}


    getShipmentCost(f: FormGroup): Observable<any> {
        console.log("form1 -- >>> " , f.value)
        // Do Rest API Call 
        // return this.http
        //     .post<IAwb>(this.resourceUrl, form1, { observe: 'response' })
        //     .map((res: any) => res);
        return null;
    }
}
