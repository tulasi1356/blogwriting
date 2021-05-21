import { Component, ElementRef, OnInit, Directive, Input, ViewChild } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent implements OnInit {
  // @ViewChild(Content) content: Content;
  // @ViewChild(Content) content: Content;
  @ViewChild('screen', { static: true })
  screen!: ElementRef;

  constructor(private elementRef: ElementRef,private captureService:NgxCaptureService) { }

  ngOnInit(): void {
  }
  colorchange(color: any){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =color;
    
  }
  capture()
  {
    console.log(this.screen.nativeElement.value)
    
  }

}
