import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { DbService } from '../services/db.service';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: User;
  login: boolean = false;
  rol: 'Usuario' | 'Administrador' = null;

  constructor(private auth: AuthService,
    private interaction: InteractionService,
    private rute: Router, private bd: DbService) {

    this.auth.stateUser().subscribe(res => {
      if (res) {
        this.login = false;
        this.getDataUser(res.uid)
      } else {
        this.login = true
        this.rute.navigateByUrl('/', { skipLocationChange: true });
      }
    })
  }
  logout() {
    this.auth.logout();
    this.interaction.presentToast('logout');
    this.rute.navigateByUrl('/', { skipLocationChange: true });
  }
  getDataUser(uid: string) {
    const path = "users/";
    const id = uid;
    this.bd.getDoc<User>(path, id).subscribe(res => {
      if (res) {
        this.rol = res.perfil
      }
    });
  }

}


