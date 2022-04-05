import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  
  @Input() mission: Mission | undefined;
  @Output() value = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  goBack(value: boolean): void {
    this.value.emit(value);
  }

}
