import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatProgressBarModule, FormsModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
  standalone: true
})

export class AuthForm {

  hide = signal(true);
  isLoading = signal(false);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  async login(): Promise<void> {
    this.isLoading.set(true);

    try {
    } catch (error) {
      console.error('Login fehlgeschlagen:', error);
    } 
  }

}
