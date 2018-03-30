import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html',
    styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
    // appareilName = 'Machine à laver';
    @Input() appareilName: string;
    @Input() appareilSatus: string;

    constructor() {
    }

    ngOnInit() {
    }

    getSatus() {
        return this.appareilSatus;
    }

}