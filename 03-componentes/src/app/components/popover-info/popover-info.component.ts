import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { isTabSwitch } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = Array(40);
  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {}

  onClick(index:number){
    console.log(index);
    this.popoverCtrl.dismiss({item: index});
    }

}
