import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Batman', 'Flash','Mujer Maravilla', 'Superman'];
  constructor() { }

  ngOnInit() {
  }

  doReorder($event){
    console.log($event);
    $event.detail.complete();
    const itemMover = this.personajes.splice($event.detail.from, 1)[0];
    this.personajes.splice($event.detail.to, 0, itemMover);
    console.log(this.personajes);
  }

}
