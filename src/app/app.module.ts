import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { FontDirective } from './font.directive';
import { LastPipe } from './pipe/last.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FontDirective,
    LastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
