import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricecard',
  templateUrl: './pricecard.component.html',
  styleUrls: ['./pricecard.component.css']
})
export class PricecardComponent implements OnInit {
  @Input() myData:any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
