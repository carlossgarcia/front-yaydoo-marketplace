import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/utils/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public ui: UiService) { }

  ngOnInit(): void {
  }

}
