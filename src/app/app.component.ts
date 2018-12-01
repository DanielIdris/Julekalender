import { Component } from '@angular/core';
import {KalenderService} from "./services/kalender.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title;


    constructor(private kalenderService: KalenderService) {
    kalenderService.getGodJul().subscribe((title: any) => {
      this.title = title.godJul;
    })
  }
}
