import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface GridItem {
  id: string | null;
  row: number | null;
  column: number | null;
  elem?: HTMLElement | null;
  color?: string | null;
}

@Injectable()
export class GridService {
  // variables here
  private gridSize: number = 10;
  private grid: Array<GridItem> = [];
  private gridSub: BehaviorSubject<Array<GridItem>> = new BehaviorSubject<Array<GridItem>>(this.grid);
  gridObs: Observable<Array<GridItem>> = this.gridSub.asObservable();
  private newBlock: GridItem = {
    id: null,
    row: null,
    column: null,
    elem: null,
    color: null,
  }

  constructor() {}

  init(): void {
    this.createGridData();
  }

  createGridData(): void {
    let row: number = 1;
    let col: number = 1;
    let iterator = 0;

    for (let i = 0; i < (this.gridSize * this.gridSize); i++) {
      let idVal = `r${row}-c${col}`;

      this.grid.push(
        this.newBlock = {
          id: idVal,
          row: row,
          column: col,
          elem: null,
          color: null,
        }
      );

      col++;
      iterator++;
      if (iterator === 10 ) {
        iterator = 0;
        col = 1;
        row++
      }
    }
  }

  getGridData(): Observable<any> {
    return this.gridObs;
  }

  updateGridData(item: GridItem): void {
    console.log(item);
    // find object in array.
    // this.grid[item];
    // //update it.
    // this.gridSub.next(
    //   this.grid[updateData]
    // )
  }
}