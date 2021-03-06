import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html',
    styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
    // appareilName = 'Machine à laver';
    @Input() appareilName: string;
    @Input() appareilStatus: string;
    @Input() indexOfAppareil: number;

    constructor(private appareilService: AppareilService) {
    }

    ngOnInit() {
    }

    getSatus() {
        return this.appareilStatus;
    }

    getColor() {
        if (this.appareilStatus === 'allumé') {
            return 'green';
        } else {
            return 'red';
        }
    }

    onSwitchOn() {
        this.appareilService.switchOnOne(this.indexOfAppareil);
    }

    onSwitchOff() {
        this.appareilService.swithcOffOne(this.indexOfAppareil);
    }

}
