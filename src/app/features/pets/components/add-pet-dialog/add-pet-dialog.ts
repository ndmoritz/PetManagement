import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-pet-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-pet-dialog.html',
  styleUrl: './add-pet-dialog.scss',
})
export class AddPetDialog {

  constructor(
    private readonly dialogRef: MatDialogRef<AddPetDialog>
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      name: 'BamBam'
    });
  }
}
