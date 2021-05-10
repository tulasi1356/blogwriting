import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  colorchange(color: any){
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =color;
    
  }

}
