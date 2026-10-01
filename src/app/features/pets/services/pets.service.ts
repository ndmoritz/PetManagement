import { inject, Injectable } from "@angular/core";
import { SupabaseService } from "../../../core/supabase/supabase.service";
import { Pet } from "../models/pets.model";
import { dbTables } from '../../../core/supabase/db';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private readonly supabaseService = inject(SupabaseService);

  async createPet(pet: Pet): Promise<void> {
    const user = await this.supabaseService.getUser();

    if (!user) {
        throw new Error('Kein eingeloggter Benutzer gefunden.');
    }

    pet.user_id = user.id;    

    const { error } = await this.supabaseService.client
      .from(dbTables.pets)
      .insert(pet);

    if (error) {
      throw error;
    }
  }
}