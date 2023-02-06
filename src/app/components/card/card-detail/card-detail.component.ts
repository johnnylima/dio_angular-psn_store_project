import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit{

@Input()
title:string=""
@Input()
type:string=""
@Input()
classifications:string=""

  ngOnInit(): void {
  }

}
