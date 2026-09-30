import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SupabaseService } from '../../core/supabase/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  private readonly supabaseService = inject(SupabaseService);
  private readonly router = inject(Router);

  async logout(): Promise<void> {
    await this.supabaseService.signOut();
    await this.router.navigate(['/login']);
  }
}
