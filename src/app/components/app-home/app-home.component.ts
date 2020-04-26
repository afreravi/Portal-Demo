import { Component, AfterContentInit, ViewChild, ElementRef  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements AfterContentInit {


  @ViewChild('carousel',  { static: true }) el:ElementRef;
  
  ngAfterContentInit():void {
    $(this.el.nativeElement).owlCarousel({
      items: 1,
      nav: true,
      loop: true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      stagePadding:30,
      smartSpeed:450
    });
  }

}
