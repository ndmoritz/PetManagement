import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { PetCard } from '../components/pet-card/pet-card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddPetDialog } from '../components/add-pet-dialog/add-pet-dialog';
import { Pet } from '../models/pets.model';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-pets',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatCheckboxModule, PetCard, MatDialogModule],
  templateUrl: './pets.html',
  styleUrl: './pets.scss',
  standalone: true
})
export class Pets {
  sort = "arrow_downward"
  pets: Pet[] = [];
  private readonly dialog = inject(MatDialog);
  private readonly petsService = inject(PetsService);

  ngOnInit(): void {
    this.loadPets();
  }

  async loadPets(): Promise<void> {
    try {
      this.pets = await this.petsService.getPets();
      console.log(this.pets);
    } catch (error) {
      console.error('Fehler beim Laden der Haustiere:', error);
    }
  }

  sortPets(): void {
    if(this.sort === "arrow_downward") {
      this.sort = "arrow_upward";
    } else {
      this.sort = "arrow_downward";
    }
  }

  openAddPetDialog(): void {
    const dialogRef = this.dialog.open(AddPetDialog, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}
