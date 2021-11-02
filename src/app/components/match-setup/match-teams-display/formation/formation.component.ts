import { Component, ElementRef, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  @Input() viewTeamOneSubsX: any

  constructor() { }



  ngOnInit(): void {
  }



}
