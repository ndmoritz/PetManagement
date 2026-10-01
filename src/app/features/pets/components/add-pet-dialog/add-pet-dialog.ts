import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Pet } from "../../models/pets.model";
import { MatButtonModule } from '@angular/material/button';
import { PetsService } from '../../services/pets.service';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-pet-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatSelectModule],
  templateUrl: './add-pet-dialog.html',
  styleUrl: './add-pet-dialog.scss',
})
export class AddPetDialog {

  private readonly petsService = inject(PetsService);
  private readonly snackBar = inject(MatSnackBar);

  pet: Pet = {
  name: '',
  type: '',
  birth_date: '',
  color: '',
  gender: '',
  race: '',
  chipnumber: '',
};

  constructor(
    private readonly dialogRef: MatDialogRef<AddPetDialog>
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  async save(): Promise<void> {
    try {
      await this.petsService.createPet(this.pet);
      this.dialogRef.close(this.pet);
    } catch(error) {
      console.error('Fehler beim Erstellen des Tieres:', error);
      this.snackBar.open("Der Eintrag konnte nicht angelegt werden", undefined, { duration: 3000})
    }
  }
}
