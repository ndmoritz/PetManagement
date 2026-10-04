import { Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../../services/pets.service';
import { Pet } from '../../models/pets.model';

@Component({
  selector: 'app-core-data',
  imports: [],
  templateUrl: './core-data.html',
  styleUrl: './core-data.scss',
})
export class CoreData {
  private readonly route = inject(ActivatedRoute);
  private readonly petsService = inject(PetsService);
  petId = "";

  pet = signal<Pet | null>(null);

  async ngOnInit(): Promise<void> {

    if(this.route.snapshot.paramMap.get('id') === null || this.route.snapshot.paramMap.get('id') === undefined ) {
      return;
    } else {
    }
  }
}
