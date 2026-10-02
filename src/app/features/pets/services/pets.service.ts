import { inject, Injectable } from "@angular/core";
import { SupabaseService } from "../../../core/supabase/supabase.service";
import { Pet } from "../models/pets.model";
import { dbColumns, dbTables } from '../../../core/supabase/db';
import { Weight } from "../../weight/models/weight.model";

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private readonly supabaseService = inject(SupabaseService);

  async getPets(ascending: boolean): Promise<Pet[]> {
    const user = await this.supabaseService.getUser();

    if (!user) {
      throw new Error('Kein eingeloggter Benutzer gefunden.');
    }

    const { data, error } = await this.supabaseService.client
      .from(dbTables.pets)
      .select('*')
      .eq(dbColumns.userId, user.id)
      .order(dbColumns.name, { ascending: ascending });

    if (error) {
      throw error;
    }

    return data;
  }

  async createPet(pet: Pet, weight: Weight): Promise<void> {
  const user = await this.supabaseService.getUser();

  if (!user) {
    throw new Error('Kein eingeloggter Benutzer gefunden.');
  }

  pet.user_id = user.id;

  const { data: createdPet, error: petError } =
    await this.supabaseService.client
      .from(dbTables.pets)
      .insert(pet)
      .select('id')
      .single();

  if (petError) {
    throw petError;
  }

  weight.pet_id = createdPet.id;
  weight.user_id = user.id;

  const { error: weightError } =
    await this.supabaseService.client
      .from(dbTables.weight)
      .insert(weight);

  if (weightError) {
    throw weightError;
  }
}
}