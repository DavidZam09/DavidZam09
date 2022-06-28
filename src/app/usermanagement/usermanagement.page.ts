import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { DbService } from '../services/db.service';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.page.html',
  styleUrls: ['./usermanagement.page.scss'],
})
export class UsermanagementPage implements OnInit {

  users: User[] = [];
  private rute = 'users/';
  constructor(private database: DbService, private inter: InteractionService) { }

  ngOnInit() {
    this.getUsers();
  }
  async getUsers() {
    await this.inter.presentLoadingOnly();
    this.database.getCollection<User>(this.rute).subscribe(answer => {
      this.users = answer;
     this.inter.dismissLoading();
    });
  }
}
