import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { APP_ROUTING } from '@app/app.routing';

// ngx-mask config
import { NgxMaskModule, IConfig  } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  showMaskTyped: true,
  showTemplate: true
};

// components
import { AppComponent } from './app.component';
import { LoginComponent } from '@components/shared/login/login.component';
import { PageNotFoundComponent } from '@components/shared/page-not-found/page-not-found.component';
import { NavbarComponent } from '@components/shared/navbar/navbar.component';
import { HomeComponent } from '@components/home/home.component';
import { TablesComponent } from '@components/maintenance/tables/tables.component';
import { UsersComponent } from '@components/maintenance/users/users.component';
import { BookingsComponent } from '@components/bookings/booking/bookings.component';
import { BookingSearchComponent } from '@components/bookings/booking-search/booking-search.component';
import { ProductComponent } from './components/maintenance/product/product.component';
import { ProviderComponent } from './components/maintenance/provider/provider.component';
import { SupplyRequestComponent } from './components/supply-request/supply-request.component';
import { OrderBoardComponent } from './components/order-board/order-board.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { RecipesComponent } from './components/maintenance/recipes/recipes.component';
import { ModalContentComponent } from './components/purchase-list/purchase-list.component';

// validators
import { PasswordValidatorDirective } from '@helpers/validations/password.validator';

// pipes
import { SupplyCodePipe } from './pipes/supply-code.pipe';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    TablesComponent,
    UsersComponent,
    BookingsComponent,
    BookingSearchComponent,
    PasswordValidatorDirective,
    ProductComponent,
    ProviderComponent,
    RecipesComponent,
    SupplyRequestComponent,
    SupplyCodePipe,
    OrderBoardComponent,
    PurchaseListComponent,
    ModalContentComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    APP_ROUTING,
    NgxPaginationModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2500,
      extendedTimeOut: 1000,
      disableTimeOut: false,
      easing: 'ease-in',
      easeTime: 300,
      enableHtml: false,
      progressBar: true,
      progressAnimation: 'decreasing',
      toastClass: 'ngx-toastr',
      positionClass: 'toast-top-center',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      tapToDismiss: true,
      onActivateTick: false
    }),
    SweetAlert2Module.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    ModalModule.forRoot(),
    ChartModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalContentComponent
  ]
})
export class AppModule { }
