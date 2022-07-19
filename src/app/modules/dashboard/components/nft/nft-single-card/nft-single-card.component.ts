import { Component, Input, OnInit } from '@angular/core';
import { Bidding } from '../../../models/bidding';

@Component({
  selector: '[nft-single-card]',
  templateUrl: './nft-single-card.component.html'
})
export class NftSingleCardComponent implements OnInit {

  @Input() bidding: Bidding = <Bidding>{};

  constructor() { }

  ngOnInit(): void {
  }

}
