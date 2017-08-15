import { Component, OnInit } from '@angular/core';


import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

import { slideInDownAnimation } from './../_animations/slide.animation';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[slideInDownAnimation]
})

export class MainComponent implements OnInit {

  mediaWatcher : Subscription;
  sideNavOpen: boolean;
  sideNavMode:string;
  

 

  constructor(public media:ObservableMedia) {}

  ngOnInit() {

     setTimeout(() => {
      this.mediaWatcher = this.media.subscribe((change:MediaChange) => {
        if(change.mqAlias === 'xs' || change.mqAlias === 'sm')
          {
            this.sideNavOpen = false;
            this.sideNavMode = 'over';
          }
          else{
            this.sideNavOpen = true;
            this.sideNavMode = 'side';
          }
      });
    },0);

   
   
  }


  isOpenSideNav(){

    this.sideNavOpen = !this.sideNavOpen;

  }


  prepRouteChildState(outlet : any ){

    return outlet.activatedRouteData['animation'];

  }



}
