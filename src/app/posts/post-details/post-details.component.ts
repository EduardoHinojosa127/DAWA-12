import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: any;
  title: any;
  description: any;
  info: any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params['id'];
    const state = history.state;
    if (state) {
      this.title = state.title;
      this.description = state.description;
      this.info = state.info
    }
  }
  
}
