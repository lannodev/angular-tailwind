import { Component, Input, OnInit } from '@angular/core';
import { Bidding } from '../../models/bidding';

@Component({
  selector: '[bidding-single-card]',
  templateUrl: './bidding-single-card.component.html'
})
export class BiddingSingleCardComponent implements OnInit {

  @Input() bidding: Bidding = <Bidding>{};

  constructor() { }

  ngOnInit(): void {
  }

}
