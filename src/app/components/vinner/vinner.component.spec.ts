import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VinnerComponent} from './vinner.component';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {KalenderService} from "../../services/kalender.service";

describe('VinnerComponent', () => {
    let component: VinnerComponent;
    let fixture: ComponentFixture<VinnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VinnerComponent],
            imports: [
                HttpClientModule,
                FontAwesomeModule,
            ],
            providers: [KalenderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
