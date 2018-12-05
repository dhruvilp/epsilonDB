import { Component, OnInit } from '@angular/core';
import { BartendersService } from '../bartenders.service';

@Component({
  selector: 'app-bartenders',
  templateUrl: './bartenders.component.html',
  styleUrls: ['./bartenders.component.css']
})
export class BartendersComponent implements OnInit {

  bartender: any[];

  constructor(private bartenderService: BartendersService) {
    this.bartenderService.get_bartenders().subscribe(
      data => {
        this.bartender = data;
        console.log(this.bartender);
      }
    );

   }

  ngOnInit() {
  }

}
