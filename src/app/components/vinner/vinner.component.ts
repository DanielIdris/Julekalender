import { Component, OnInit } from '@angular/core';
import {KalenderService} from "../../services/kalender.service";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-vinner',
  templateUrl: './vinner.component.html',
  styleUrls: ['./vinner.component.css']
})
export class VinnerComponent implements OnInit {

  faCoffee = faCoffee;
  private title = "Ukjent";
  private imgUrl = '../../../assets/alvene/ukjent.jpg';
    constructor(private kalenderService: KalenderService) { }

  ngOnInit() {
  }

  trekkVinner(){
    this.kalenderService.getVinner().subscribe((alv: any) => {
      this.imgUrl = alv.bildeUrl;
      this.title = alv.navn;
    })
  }

}
