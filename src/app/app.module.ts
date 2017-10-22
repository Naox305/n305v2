import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LabComponent } from './lab/lab.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ProcessrequestComponent } from './processrequest/processrequest.component';
import { MenuService } from './menu/menu.service';
import { GalleryService } from './gallery/gallery.service';

const appRoutes: Routes = [
  { path: 'Home/PrivacyPolicy', component: PrivacypolicyComponent },
  { path: 'privacy-policy', component: PrivacypolicyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    LabComponent,
    PrivacypolicyComponent,
    ProcessrequestComponent
  ],
  imports: [
  RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [MenuService, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
