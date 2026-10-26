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
  @Input() birth_date!: string;
  @Input() weight!: string;
  @Input() nextCheckup!: string;
  @Input() costs!: string;
  @Input() type!: string;
  
  ngOnInit() {
    if(this.imageUrl === "" || this.imageUrl === undefined) {
        if(this.type === "dog") {
          this.imageUrl = "https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg";
        } else {
          this.imageUrl = "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg?utm_source=de.wikipedia.org&utm_campaign=index&utm_content=thumbnail";
        }
    }
  }

}
