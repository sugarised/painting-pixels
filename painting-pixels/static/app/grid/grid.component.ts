import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GridService, GridItem } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  gridData: Array<GridItem>;

  constructor(
    public gridService: GridService,
  ) {

  }

  ngOnInit() {
    this.gridService.init();
    this.gridService.getGridData().subscribe(data => {
      this.gridData = data;
    })
  }

  isClicked(block: GridItem): void {
    console.log(block.color);
    this.gridService.updateGridData(block);
  }
}
