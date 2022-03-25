import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PointsAdderComponent } from './components/points-adder/points-adder.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ResultsComponent } from './components/results/results.component';
@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    PointsAdderComponent,
    HomeComponentComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
