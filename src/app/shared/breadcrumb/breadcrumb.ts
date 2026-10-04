import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SupabaseService } from '../../core/supabase/supabase.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  page = "";
  private readonly supabaseService = inject(SupabaseService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.page = route.snapshot.data['breadcrumb'];
      });
  }

  async navigateToStartscreen(): Promise<void> {
    await this.router.navigate(['/pets']);
  }

  async logout(): Promise<void> {
    await this.supabaseService.signOut();
    await this.router.navigate(['/login']);
  }
}
