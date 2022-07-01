import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  redirectLink(): string{
    console.log('redirect');

    var navigationExtras = {
      queryParams: { name: 'value0' },
      replaceUrl: true, // optional
      relativeTo: this.activatedRoute
    };

    return this.router.createUrlTree(['../22'],
      navigationExtras).toString();

  }

  redirectBtn(): void{
    console.log('redirect');
    const url = this.router.createUrlTree(['../22'],
      {
        queryParams: {
          name: 'Test'
        },
        relativeTo: this.activatedRoute
      })
    this.router.navigateByUrl(url);
  }

}
