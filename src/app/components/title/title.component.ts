import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ue-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Disabling zones in the particular component 
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleComponent implements OnInit {
  @Input() title: string = "Default Title";

  constructor() { }

  ngOnInit() {
  }

}
