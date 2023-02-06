import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  imgUrl = "";

  @Input()
title:string=""
@Input()
type:string=""
@Input()
classifications:string=""

@Input()
  price:string=""

  @Input()
  salestype:string=""

  ngOnInit(): void {
  }

}
