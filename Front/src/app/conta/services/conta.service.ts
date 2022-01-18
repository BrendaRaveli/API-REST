import { Usuario } from './../models/usuario';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ContaService{
    constructor(private http: HttpClient){}

    registrarUsuario(Usuario: Usuario){

    }
    login(usuario: Usuario){
        
    }
}