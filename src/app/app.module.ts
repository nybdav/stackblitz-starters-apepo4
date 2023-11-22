import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyComponent } from './body-component/body.component';
import { FooterComponent } from './footer-component/footer.component';
import { HeaderComponent } from './header-component/header.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
