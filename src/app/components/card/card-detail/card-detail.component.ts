import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit{

title:string="Play It Now!"
type:string="Full Game"
classifications:string="PS4"

  ngOnInit(): void {
  }

}
