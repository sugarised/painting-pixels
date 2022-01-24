import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridComponent } from './grid.component';
import { GridService } from './grid.service';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GridService
  ],
  exports: [GridComponent]
})
export class GridModule { }
