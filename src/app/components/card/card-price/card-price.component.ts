import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit{
  price:string="R$ 15,99"
  ngOnInit(): void {
  }


}
