import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { SupabaseService } from '../../core/supabase/supabase.service';

export const authGuard: CanActivateFn = async () => {
  const supabaseService = inject(SupabaseService);
  const router = inject(Router);

  try {
    const user = await supabaseService.getUser();

    if (user) {
      return true;
    }

    return router.createUrlTree(['/login']);
  } catch (error) {
    console.error('Fehler im Auth-Guard:', error);

    return router.createUrlTree(['/login']);
  }
};