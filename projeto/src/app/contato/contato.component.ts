import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  enviarDados() {
    console.log(this.usuario);
    this.service.enviaEmail(this.usuario).subscribe(
      (res) => {
        this.usuario.name = "";
        this.usuario.email = "";
        this.usuario.phone = "";
        this.usuario.cell_phone = "";
        this.usuario.quantity = "";
        this.usuario.newsletter_accept = "";
        console.log(res);
        alert('Dados enviados com sucesso!');
      },
      (err) => {
        console.log(err);
        alert('Falha no envio dos dados!');
      }
    );
  }
}
