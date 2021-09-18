import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { LoginComponent } from './components/login/login.component';

// SharedModule
import { SharedModule } from './components/shared/shared.module';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';
import { EditValueComponent } from './components/shared/edit-value/edit-value.component';
import { ListConfigurationComponent } from './components/shared/list-configuration/list-configuration.component';
import { EditValueGlobalComponent } from './components/shared/edit-value-global/edit-value-global.component';

@NgModule({
  declarations: [AppComponent, 
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  entryComponents:[ConfirmDialogComponent,EditValueComponent,ListConfigurationComponent, EditValueGlobalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
