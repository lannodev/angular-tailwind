import { Component, Input, OnInit } from '@angular/core';
import { Bidding } from '../../models/bidding';

@Component({
  selector: '[bidding-dual-card]',
  templateUrl: './bidding-dual-card.component.html',
})
export class BiddingDualCardComponent implements OnInit {

  @Input() bidding: Bidding = <Bidding>{};

  constructor() { }

  ngOnInit(): void {
  }

}
