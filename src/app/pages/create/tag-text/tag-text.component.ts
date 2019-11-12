import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.scss']
})
export class TagTextComponent implements OnInit {
  tagTextInput = '';
  fontType = 'sans-serif';
  @Output() selectFontEvent = new EventEmitter;
  @Output() addTextEvent = new EventEmitter;

  constructor() { }

  selectFont(fontType: string) {
    this.selectFontEvent.emit(fontType);
  }

  addText(text: string) {
    this.addTextEvent.emit(text);
  }
  ngOnInit(){

  }

}