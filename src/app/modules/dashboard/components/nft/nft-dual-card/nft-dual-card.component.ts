import { Component, Input, OnInit } from '@angular/core';
import { Bidding } from '../../../models/bidding';

@Component({
  selector: '[nft-dual-card]',
  templateUrl: './nft-dual-card.component.html',
})
export class NftDualCardComponent implements OnInit {

  @Input() bidding: Bidding = <Bidding>{};

  constructor() { }

  ngOnInit(): void {
  }

}
