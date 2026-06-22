import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UikitHeaderComponent } from '../../components/uikit-header/uikit-header.component';
import { NftSingleCardComponent } from 'src/app/modules/dashboard/components/nft/nft-single-card/nft-single-card.component';
import { Nft } from 'src/app/modules/dashboard/models/nft';
import { NftDualCardComponent } from 'src/app/modules/dashboard/components/nft/nft-dual-card/nft-dual-card.component';

@Component({
  selector: 'app-cards',
  imports: [UikitHeaderComponent, NftSingleCardComponent, NftDualCardComponent],
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  nft: Nft[];

  constructor() {
    this.nft = [
      {
        id: 34356771,
        title: 'Girls of the Cartoon Universe',
        creator: 'Jhon Doe',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Pupaks',
        price: 548.79,
        last_bid: 0.35,
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/img-03.jpg',
      },
    ];
  }
}
