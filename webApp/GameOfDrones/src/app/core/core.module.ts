import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementServicesService } from './services/movementServices/movement-services.service';
import { ScoreServicesService } from './services/scoreServices/score-services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    MovementServicesService,
    ScoreServicesService
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
