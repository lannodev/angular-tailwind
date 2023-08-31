import { Component } from '@angular/core';
import { PodcastCardItemComponent } from '../../components/podcast/podcast-card-item/podcast-card-item.component';
import { NgFor } from '@angular/common';
import { PodcastPlayerComponent } from '../../components/podcast/podcast-player/podcast-player.component';
import { PodcastCardBannerComponent } from '../../components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastHeaderComponent } from '../../components/podcast/podcast-header/podcast-header.component';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    standalone: true,
    imports: [
        PodcastHeaderComponent,
        PodcastCardBannerComponent,
        PodcastPlayerComponent,
        NgFor,
        PodcastCardItemComponent,
    ],
})
export class PodcastComponent {

  public listening = [
    { title: "Podpah", subtitle: "podpah", image: "https://i.scdn.co/image/ab67656300005f1fda018f5c18ecebc5d3ff3b59" },
    { title: "Inteligência Ltda.", subtitle: "Rogério Vilela", image: "https://i.scdn.co/image/ab67656300005f1f11bcdb0577b867bebbe167c0" },
    { title: "Poddelas", subtitle: "poddelas", image: "https://i.scdn.co/image/ab67656300005f1f7816cf087d5372059d5242c1" },
    { title: "Ticaracaticast", subtitle: "Ticaracaticast", image: "https://i.scdn.co/image/ab67656300005f1fbe52b62cd2456fdd6712a02e" },
    { title: "Mau Acompanhado", subtitle: "Jovem Nerd", image: "https://i.scdn.co/image/ab67656300005f1f003ae3aeaf3c898e0124760b" },
    { title: "Quem pode, POD", subtitle: "Giovanna Ewbank e Fernanda Paes Leme", image: "https://i.scdn.co/image/ab67656300005f1f16642a90f8b553557b7109c4" },
    { title: "Bocadinhas", subtitle: "Lucas Inutilismo", image: "https://i.scdn.co/image/ab67656300005f1febb8be633fc89f1582dc18fe" },
    { title: "Mauricio Meirelles Podcast", subtitle: "Maurício Meirelles", image: "https://i.scdn.co/image/ab67656300005f1f44f8f1506e01f4628cfd348e" },
  ]

}
