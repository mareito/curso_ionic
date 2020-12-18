import { Component, OnInit } from '@angular/core';

interface Componente {
  icon:string; 
  name:string;
  redidecTo:string;   
}

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  public componentes: Componente[] = [
    {
      icon:'american-football',
      name: 'Action Sheet',
      redidecTo: '/action-sheet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
