import { Component, OnInit } from '@angular/core';
import { Bidding } from '../../models/bidding';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html'
})
export class BiddingComponent implements OnInit {

  bidding: Array<Bidding>;

  constructor() {
    this.bidding = [
      {
        id: 34356771,
        title: "California Art",
        creator: "Robert Fox",
        instant_price: 4.2,
        price: 6047.84,
        ending_in: "06h 52m 47s",
        last_bid: 2.48,
        image: "./assets/images/img-01.jpg"
      },
      {
        id: 34356772,
        title: "CWavy Curved Art",
        price: 2.630,
        last_bid: 1.07,
        image: "./assets/images/img-02.jpg"
      },
      {
        id: 34356773,
        title: "Happy Kitty Art",
        price: 17.035,
        last_bid: 1.07,
        image: "./assets/images/img-03.jpg"
      }
    ]
  }

  ngOnInit(): void {
  }

}
