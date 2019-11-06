import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ue-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Disabling zones in the particular component 
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input() label = "My label";
  // @Output() myButtonEvent = new EventEmitter();

  constructor( private el: ElementRef, private cd: ChangeDetectorRef) { }

  state = {
    clicked: false
  }

  private setState(key, value){
    
    this.state = {...this.state, [key]: value};
    
    // Detectinh changes manually to update the state property in the html template
    this.cd.detectChanges();
    
  }
  
  toggleClick(){
    this.setState("clicked", !this.state.clicked);
    this.customEmit();
  }

  private customEmit(){
    const domEvent = new CustomEvent("myButtonEvent");
    this.el.nativeElement.dispatchEvent(domEvent);
  }


  ngOnInit() {
  }

}
