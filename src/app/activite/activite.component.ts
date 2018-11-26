import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {

  @Input() activiteNom: string
  @Input() activiteSpecificites: string;
  @Input() activiteTerrain: string;

  constructor() { }

  ngOnInit() {
  }

}
