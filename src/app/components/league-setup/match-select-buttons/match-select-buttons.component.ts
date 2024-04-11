import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'match-select-buttons',
  templateUrl: './match-select-buttons.component.html',
  styleUrls: ['./match-select-buttons.component.css'],
})
export class MatchSelectButtonsComponent {
  @Output() reset: EventEmitter<null> = new EventEmitter<null>();
  @Output() classicMatch: EventEmitter<null> = new EventEmitter<null>();
  @Input() classicMode: boolean = false;

  regenerating: boolean = false;

  resetHandler() {
    this.regenerating = true;
    setTimeout(() => {
      this.reset.emit();
      this.regenerating = false;
    }, 1000);
  }

  classicMatchHandler() {
    this.classicMode = !this.classicMode;
    this.classicMatch.emit();
  }
}
