import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any;
  selectedMission: Mission | undefined;
  showList: boolean = true;
  showDiv: boolean = true;

  missionSelect(mission: Mission): void {
    this.selectedMission = mission;
    this.showList = false;
    this.showDiv = true;
  }
  constructor(private api: SpacexapiService) { }

  ngOnInit(): void {
    this.api.getMissions().subscribe((missions: any) => {
      this.missions = missions;
    })
  }
  goBack(value: boolean): void {
    this.showList = value;
    this.showDiv = false;
  }

}
