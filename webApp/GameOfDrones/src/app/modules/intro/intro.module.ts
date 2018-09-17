import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { IntroRoutingMOdule } from './intro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IntroRoutingMOdule
  ],
  declarations: [IntroComponent]
})
export class IntroModule { }
