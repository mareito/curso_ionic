import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  items = Array(20);
  @ViewChild(IonInfiniteScroll) ionfiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);  
      setTimeout(() => {
        if(this.items.length > 50)
        {
          this.ionfiniteScroll.complete();
          this.ionfiniteScroll.disabled = true;
          return;
        }
        const nuevo = Array(20);
        this.items.push(...nuevo);
        this.ionfiniteScroll.complete();    
      }, 1000);
 


    
  }


}
