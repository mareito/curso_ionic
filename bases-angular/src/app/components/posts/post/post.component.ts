import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje: any;
  @Output() id = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.id.emit(this.mensaje.id);
  }

}
