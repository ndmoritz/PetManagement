import { Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../../services/pets.service';
import { Pet } from '../../models/pets.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-core-data',
  imports: [MatIcon],
  templateUrl: './core-data.html',
  styleUrl: './core-data.scss',
})
export class CoreData {
  private readonly route = inject(ActivatedRoute);
  private readonly petsService = inject(PetsService);
  petId = "";

  pet = signal<Pet | null>(null);

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.petId = id;
  }
}
