import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KalenderService} from "../../services/kalender.service";
import {faGift} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-vinner',
    templateUrl: './vinner.component.html',
    styleUrls: ['./vinner.component.css']
})
export class VinnerComponent implements OnInit {

    faGift = faGift;
    title = "Ukjent";
    imgUrl = '../../../assets/alvene/ukjent.jpg';
    @ViewChild('drumroll') el:ElementRef;

    constructor(private kalenderService: KalenderService) {
    }

    ngOnInit() {
        this.kalenderService.getDagensVinner().subscribe((dagensVinner: any) => {
            if(dagensVinner !== null){
                this.imgUrl = dagensVinner.alv.bildeUrl;
                this.title = dagensVinner.alv.navn;
            }
        } )
    }

    trekkVinner(passord: string) {
        this.kalenderService.getVinner(passord).subscribe(async (alv: any) => {
            if(alv === null){
                return;
            }
            this.el.nativeElement.playbackRate = 1.2;
            this.el.nativeElement.play();

            await this.sleep(5000);
            this.imgUrl = alv.bildeUrl;
            this.title = alv.navn;
        })
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
