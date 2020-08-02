import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' }) //injetavel no projeto todo (root)
export class PhotoService {
    
    //injeta http e torna acessivel com private
    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {

        return this.http
			.get<Photo[]>(API + '/' + userName + '/photos');

    }

    listFromUserPaginate(userName: string, page: number) {
        
        const params = new HttpParams()
            .append('page', page.toString()) //passa o numero da pagina na url

        return this.http
			.get<Photo[]>(API + '/' + userName + '/photos', { params });

    }
}
    