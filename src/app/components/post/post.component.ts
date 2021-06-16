import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces/Post";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  @Input()
  post: Post;

  ngOnInit(): void {
  }

  getPostDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post})
  }

}
