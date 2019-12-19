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
    title1 = "Ukjent";
    title2 = "Ukjent";
    imgUrl1 = '../../../assets/alvene/ukjent.jpg';
    imgUrl2 = '../../../assets/alvene/ukjent.jpg';
    alleVinnerAktiv = false;
    @ViewChild('drumroll') el:ElementRef;

    constructor(private kalenderService: KalenderService) {
    }

    ngOnInit() {
        this.kalenderService.getDagensVinner().subscribe((dagensVinner: any) => {
            if(dagensVinner !== null){
                this.imgUrl1 = dagensVinner.alv1.bildeUrl;
                this.title1= dagensVinner.alv1.navn;
                this.imgUrl2 = dagensVinner.alv2.bildeUrl;
                this.title2 = dagensVinner.alv2.navn;
            }
        } )
    }

    trekkVinner(passord: string) {
        this.kalenderService.getVinner(passord).subscribe(async (dagensVinner: any) => {
            if(dagensVinner === null){
                return;
            }
            this.el.nativeElement.playbackRate = 1.2;
            this.el.nativeElement.play();

            await this.sleep(5000);
            this.alleVinnerAktiv = true;
            this.imgUrl1 = dagensVinner.alv1.bildeUrl;
            this.title1= dagensVinner.alv1.navn;
            this.imgUrl2 = dagensVinner.alv2.bildeUrl;
            this.title2 = dagensVinner.alv2.navn;
        })
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
