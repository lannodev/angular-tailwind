import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-responsive-helper',
  templateUrl: './responsive-helper.component.html',
  styleUrls: ['./responsive-helper.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class ResponsiveHelperComponent implements OnInit {
  public env: any = environment;

  constructor() {}

  ngOnInit(): void {}
}
