import { Component, inject, signal } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SupabaseService } from '../../../../core/supabase/supabase.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
  standalone: true
})

export class AuthForm {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly supabaseService = inject(SupabaseService);
  private readonly snackBar = inject(MatSnackBar);
  readonly loginError = signal<string | null>(null);

  hide = signal(true);
  isLoading = signal(false);

  readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  togglePassword(): void {
    this.hide.update(hidden => !hidden);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  async login(): Promise<void> {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.loginError.set(null);

    try {
      const { email, password } = this.loginForm.getRawValue();

      const { error } =
        await this.supabaseService.signIn(
          email,
          password
        );
      // When combination of mail and password is incorrect
      if (error) {
        const message = 'E-Mail-Adresse oder Passwort ist nicht korrekt.';
        this.loginError.set(message);
        this.openSnackBar(message, "schließen");
        return;
      }
      // Otherwise navigate to startscreen
      await this.router.navigate(['/pets']);
    } catch (error) {
      const message = "Die Anmeldung ist momentan nicht möglich";
      this.loginError.set(message);
      this.openSnackBar(message, "Schließen");
    } finally {
      this.isLoading.set(false);
    }
  }
}
