import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-pet-card',
  imports: [MatCardModule, MatIcon],
  templateUrl: './pet-card.html',
  styleUrl: './pet-card.scss',
})
export class PetCard {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() age!: string;
  @Input() weight!: string;
  @Input() nextCheckup!: string;
  @Input() costs!: string;
}
