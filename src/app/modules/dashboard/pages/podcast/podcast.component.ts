import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
})
export class PodcastComponent {

  public podcasts = [
    { title: "Podpah", subtitle: "podpah", image: "https://i.scdn.co/image/ab67656300005f1fda018f5c18ecebc5d3ff3b59" },
    { title: "Inteligência Ltda.", subtitle: "Rogério Vilela", image: "https://i.scdn.co/image/ab67656300005f1f11bcdb0577b867bebbe167c0" },
    { title: "Poddelas", subtitle: "poddelas", image: "https://i.scdn.co/image/ab67656300005f1f7816cf087d5372059d5242c1" },
    { title: "Ticaracaticast", subtitle: "Ticaracaticast", image: "https://i.scdn.co/image/ab67656300005f1fbe52b62cd2456fdd6712a02e" },
  ]

}
