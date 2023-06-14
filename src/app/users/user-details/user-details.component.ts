import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userID: any;
  name: any;
  edad: any;
  sexo: any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userID = this.route.snapshot.params['id'];
    const state = history.state;
    if (state) {
      this.name = state.name;
      this.edad = state.edad;
      this.sexo = state.sexo
    }
  }
}
