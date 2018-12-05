import { Component, OnInit } from '@angular/core';
import { ModificationsService } from '../modifications.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modification-details',
  templateUrl: './modification-details.component.html',
  styleUrls: ['./modification-details.component.css']
})
export class ModificationDetailsComponent implements OnInit {


  tableName: string;
  column_name: any[];

  constructor(
    private modificationSerice: ModificationsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paraMap) => {
      this.tableName = paraMap.get('modification');

      this.modificationSerice.get_column_name(this.tableName).subscribe(
        data => {
          this.column_name = data;
          console.log(data);
        }
      );
    });
  }

  ngOnInit() {
  }

}
