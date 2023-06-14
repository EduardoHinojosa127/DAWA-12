import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'John', edad: 25, sexo: 'Masculino', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-CujXEB_pHNjg6VnEKrUJW-sgY-6glbQhw'},
    { id: 2, name: 'Jane', edad: 19, sexo: 'Femenino', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg'},
    { id: 3, name: 'Doe', edad: 21, sexo: 'Femenino', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kvHs-RfmpIMnbKH9iigB9BwjwItI4LJ2z480hUdGnh5nWgxN-RuUmL_F3Isa4BfbmPs'}
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  viewUserDetails(user: any) {
    this.router.navigate(['/user-details/'+user.id], { state: { name: user.name, edad:user.edad, sexo: user.sexo } });
  }
}
