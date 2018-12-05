import { Component, OnInit } from '@angular/core';

import { ManufacturersService } from '../manufacturers.service';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {

  manf: any[];

  constructor(private manufacturersService: ManufacturersService) {
    this.manufacturersService.get_manufacturers().subscribe(
      data => {
        this.manf = data;

      }
    );
  }

  ngOnInit() {
  }

}

