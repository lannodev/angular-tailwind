import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nft-header',
  templateUrl: './nft-header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class NftHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
