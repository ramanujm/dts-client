import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatFormFieldModule
} from '@angular/material';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatFormFieldModule],
  // tslint:disable-next-line:max-line-length
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatFormFieldModule],
})

export class MaterialModule {

}
