import { Component, OnInit } from '@angular/core';

declare var device: { platform: any; };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    document.addEventListener('deviceready', function() {
    alert(device.platform);
    }, false);
    }
}
