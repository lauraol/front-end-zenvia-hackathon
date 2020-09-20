import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  public enviaEmail(usuario: Usuario) {
    return this.http.post(
      'https://zenvia-hackathon-backend.herokuapp.com/leads',
      usuario
    );
  }
}
