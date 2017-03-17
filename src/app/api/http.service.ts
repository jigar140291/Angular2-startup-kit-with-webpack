
import {Injectable, Inject} from '@angular/core';
import {Http, Response, RequestOptions, Request, Headers} from '@angular/http';

declare let ApiUrl : any;

@Injectable()
export class httpService {
    constructor(private http: Http){}

    getHeader = () => {
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');

        return headers;
    };

    request = (req) => {
        if(req.params){
            req.params._method = 'GET';
        }
        let baseUrl = ApiUrl,
            requestOptions = new RequestOptions({
            method: req.method,
            url: baseUrl+req.url,
            headers: req.header ? req.header : this.getHeader(),
            body: JSON.stringify(req.params)
        });

        return this.http.request(new Request(requestOptions))
                        .map((res:Response) => res.json());
    }
}