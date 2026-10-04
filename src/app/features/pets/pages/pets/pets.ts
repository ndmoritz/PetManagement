import { Component, computed, inject, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { PetCard } from '../../components/pet-card/pet-card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddPetDialog } from '../../components/add-pet-dialog/add-pet-dialog';
import { Pet } from '../../models/pets.model';
import { PetsService } from '../../services/pets.service';
import { Weight } from '../../../weight/models/weight.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatCheckboxModule, PetCard, MatDialogModule, FormsModule],
  templateUrl: './pets.html',
  styleUrl: './pets.scss',
  standalone: true
})
export class Pets {
  sort = "arrow_downward"
  pets = signal<Pet[]>([]);
  weights = signal<Weight[]>([]);
  sortAscending = true;
  catFilterOn = signal(true);
  dogFilterOn = signal(true);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly petsService = inject(PetsService);

  filteredPets = computed(() =>
    this.pets().filter(pet =>
      (pet.type === 'cat' && this.catFilterOn()) ||
      (pet.type === 'dog' && this.dogFilterOn())
    )
  );

  async ngOnInit(): Promise<void> {
    await this.loadPets(this.sortAscending);
    // await this.loadWeights();
  }

  async loadPets(ascending: boolean): Promise<void> {
    try {
      const pets = await this.petsService.getPets(ascending);
      this.pets.set(pets);
      console.log(pets);
    } catch (error) {
      console.error('Fehler beim Laden der Haustiere:', error);
    }
  }

  // async loadWeights(): Promise<void> {
  //   try {
  //     // const weights = await this.petsService.getWeights();
  //     this.weights.set(weights);
  //   } catch (error) {
  //     console.error('Fehler beim Laden der Gewichte:', error);
  //   }
  // }

  sortPets(): void {
    if(this.sort === "arrow_downward") {
      this.sort = "arrow_upward";
      this.sortAscending = false;
      this.loadPets(this.sortAscending);
    } else {
      this.sort = "arrow_downward";
      this.sortAscending = true;
      this.loadPets(this.sortAscending);
    }
  }

  async openPet(petId: string): Promise<void> {
    await this.router.navigate(['/pets/core-data', petId]);
  }

  openAddPetDialog(): void {
    const dialogRef = this.dialog.open(AddPetDialog, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPets(this.sortAscending);
      }
    });
  }
}
