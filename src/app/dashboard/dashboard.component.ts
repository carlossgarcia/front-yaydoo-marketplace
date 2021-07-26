import { Component, OnInit } from '@angular/core';
import { UiService } from '../utils/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(public ui: UiService) { }

  ngOnInit(): void {
  }

}
