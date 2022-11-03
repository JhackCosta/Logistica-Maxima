import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'

import {Observable, throwError} from 'rxjs'
import {map, catchError} from 'rxjs/operators' 
import { Cliente } from '../model/cliente.model';

@Injectable()
export class ClienteService{

    constructor(private http:HttpClient){
    }

    httpOptions = {
        headers: new HttpHeaders({
            'content-type': 'application/json'
        })
    };

    public buscarCep(cep: string):Observable<any> {

        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(
            map((response: any)=> response),
            catchError((erro: HttpErrorResponse) => throwError(erro))
            
        );
    }
    
    // public longLat(numero: number, rua: string):Observable<any>{

    //     return this.http.get(`https://nominatim.openstreetmap.org/search?street=${numero},${rua}&format=json&limit=1`)
    //         .pipe(map((response: any) => response),
    //         catchError((erro: HttpErrorResponse) => throwError(erro))

    //     );
    // }

    public selectGeolocalizacaoAPIGoogle(numero: number, rua: string, bairro:string, cidade: string, uf: string):Observable<any>{
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${rua}+${numero}+${bairro}+${cidade}+${uf}+&key=AIzaSyAjtU8Srk8RCTJi_HnFwuIBA2W0HY9MMmM`)
            .pipe(map((response: any) => response),
            catchError((erro: HttpErrorResponse) => throwError(erro))

        );
    }

    public apiMain( entity: Cliente):Observable<any>{
        return this.http.post("http://localhost:8080/cliente/save", entity)
        .pipe(map((response: any) => response),
        catchError((erro: HttpErrorResponse)=>throwError(erro)));
    }

    public select(codigo: number){
        return this.http.get(`http://localhost:8080/cliente/codigo=${codigo}`)
        .pipe(map((response: any) => response),
        catchError((erro: HttpErrorResponse)=>throwError(erro)));
    }

    public delete(codigo: number){

        return this.http.delete(`http://localhost:8080/cliente/codigo=${codigo}`)
        .pipe(map((response: any) => response),
        catchError((erro: HttpErrorResponse)=>throwError(erro)));

    }

}