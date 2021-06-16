import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params)=>{

      this.user = this.router.getCurrentNavigation()?.extras.state as User;

    })
  }

  ngOnInit(): void {
    console.log(history.state);
  }

}
