import { Component, OnInit, ViewChild } from '@angular/core';
import { BarsService, Bar } from '../bars.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {
  bars: Bar[];

  constructor(public barService: BarsService) {
    this.getBars();
   }

  ngOnInit() {
  }

  getBars() {
    this.barService.getBars().subscribe(
      data => {
        this.bars = data;
      },
      error => {
        alert('could not retrive a list of bars');
      }
    );
  }
}


