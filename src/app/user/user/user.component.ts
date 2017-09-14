import { Component, OnInit } from '@angular/core';
import { MyService } from '../../service/my-service.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  error: string;
  constructor(private service: MyService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
