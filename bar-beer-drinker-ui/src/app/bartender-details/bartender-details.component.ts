import { Component, OnInit } from '@angular/core';
import { BartendersService } from '../bartenders.service';
import { ActivatedRoute } from '@angular/router';
import {SelectItem} from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-bartender-details',
  templateUrl: './bartender-details.component.html',
  styleUrls: ['./bartender-details.component.css']
})
export class BartenderDetailsComponent implements OnInit {

  bartenderName: string;
  bartendershift: any[];
  bartenderbeer: any[];
  barname: string;



  constructor(
    private bartenderService: BartendersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.bartenderName = paramMap.get('bartender');

      this.bartenderService.get_bartender_shift(this.bartenderName).subscribe(
        data => {
          this.bartendershift = data;
          this.barname = this.bartendershift[0].barname;

        }
      );

      this.bartenderService.get_bartender_beerssold(this.bartenderName).subscribe(
        data => {
          this.bartenderbeer = data;
        }
      );
  });
}

  ngOnInit() {
  }

}
