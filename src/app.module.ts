import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MaterializeDirective } from 'angular2-materialize';

@NgModule({
   imports: [ BrowserModule ],
   declarations: [ AppComponent, MaterializeDirective ],
   providers: [],
   bootstrap: [ AppComponent ]   
})
export class AppModule {}
