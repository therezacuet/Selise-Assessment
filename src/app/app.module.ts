import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { AddNodeDialogComponent } from './shared/add-node-dialog/add-node-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle, MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { NodeComponent } from './shared/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponentComponent,
    AddNodeDialogComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddNodeDialogComponent]
})
export class AppModule { }
