import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './admin/component/header/header.component';
import {SidenavComponent} from './admin/component/sidenav/sidenav.component';
import {MovieComponent} from './admin/component/movie/movie.component';
import {DashboardComponent} from './admin/component/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {LoginadminComponent} from './admin/component/loginadmin/loginadmin.component';
import {AppAdminComponent} from './admin/component/app-admin/app-admin.component';
import {PageNotFoundComponent} from './util/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MovieChildComponent} from './admin/component/movie-child/movie-child.component';
import {AddMovieComponent} from './admin/component/add-movie/add-movie.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PaginatorComponent} from './util/paginator/paginator.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MomentDateModule} from '@angular/material-moment-adapter';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {AddGenreMovieComponent} from './admin/component/add-genre-movie/add-genre-movie.component';
import {AddCastMovieComponent} from './admin/component/add-cast-movie/add-cast-movie.component';
import {AddDirectorMovieComponent} from './admin/component/add-director-movie/add-director-movie.component';
import {MatCardModule} from '@angular/material/card';
import {ProfilePageComponent} from './admin/component/profile-page/profile-page.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {UploadImageComponent} from './util/upload-image/upload-image.component';
import {MatRadioModule} from '@angular/material/radio';
import {ListCastMovieComponent} from './admin/component/list-cast-movie/list-cast-movie.component';
import {FilterPipe} from './pipe/filter.pipe';
import {HighlightDirective} from './pipe/highlight.pipe';
import {CastComponent} from './admin/component/cast/cast.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MovieComponent,
    DashboardComponent,
    LoginadminComponent,
    AppAdminComponent,
    PageNotFoundComponent,
    MovieChildComponent,
    AddMovieComponent,
    PaginatorComponent,
    AddGenreMovieComponent,
    AddCastMovieComponent,
    AddDirectorMovieComponent,
    ProfilePageComponent,
    UploadImageComponent,
    ListCastMovieComponent,
    FilterPipe,
    HighlightDirective,
    CastComponent
  ],
  entryComponents: [
    AddMovieComponent,
    AddGenreMovieComponent,
    AddCastMovieComponent,
    AddDirectorMovieComponent,
    ListCastMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    FormsModule,
    NgbModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatRadioModule,

  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  exports: [AddMovieComponent],
})
export class AppModule {
}
