import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from '../manufacturers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manufacturer-details',
  templateUrl: './manufacturer-details.component.html',
  styleUrls: ['./manufacturer-details.component.css']
})
export class ManufacturerDetailsComponent implements OnInit {

  manfName: string;
  topregion: any[];
  topregiondrinker: any[];

  constructor(private manufactureService: ManufacturersService,
    private route: ActivatedRoute) {
      this.route.paramMap.subscribe((paramMap) => {
        this.manfName = paramMap.get('manufacturer');
        console.log(this.manfName);

        this.manufactureService.get_Top_Regions(this.manfName).subscribe(
          data => {
            this.topregion = data;
            console.log(this.topregion);
          }
        );

        this.manufactureService.get_drinker_Regions(this.manfName).subscribe(
          data => {
            this.topregiondrinker = data;
            console.log(this.topregiondrinker);

          }
        );
        });
  }
  ngOnInit() {
  }

}
