import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './button/button.component';

import {
  ButtonDirective,
  ButtonDenseDirective,
  ButtonSecondaryDirective,
  ButtonContainedDirective,
  ButtonContainedSecondaryDirective,
  ButtonOutlineDirective,
  ButtonOutlineSecondaryDirective,
  ButtonIconDirective,
  ButtonIconSmallDirective,
  ButtonIconSmallSecondaryDirective,
  ButtonIconSecondaryDirective,
  ButtonIconContainedDirective,
  ButtonIconContainedSecondaryDirective,
  ButtonIconOutlineDirective,
  ButtonIconOutlineSecondaryDirective
}
  from './directives/button.directive';
import {
  ClIconDirective, ClIconSmallDirective, ClIconBigDirective, ClIconXBigDirective
} from './directives/icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,

    ClIconDirective,
    ClIconSmallDirective,
    ClIconBigDirective,
    ClIconXBigDirective,

    ButtonComponent,
    ButtonDirective,
    ButtonDenseDirective,
    ButtonSecondaryDirective,
    ButtonContainedDirective,
    ButtonContainedSecondaryDirective,
    ButtonOutlineDirective,
    ButtonOutlineSecondaryDirective,
    ButtonIconDirective,
    ButtonIconSmallDirective,
    ButtonIconSmallSecondaryDirective,
    ButtonIconSecondaryDirective,
    ButtonIconContainedDirective,
    ButtonIconContainedSecondaryDirective,
    ButtonIconOutlineDirective,
    ButtonIconOutlineSecondaryDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
