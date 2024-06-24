import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model: any = {};	
  isDropDwn: boolean = false;

  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit(): void {
  };

  dropDwn () {
    this.isDropDwn = !this.isDropDwn;
    console.log("🚀 ~ NavComponent ~ isDropDwn:", this.isDropDwn)

  }

  login () {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }

  logout() {
    this.accountService.logout();
  }

}
