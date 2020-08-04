import { PokemonDTO } from './pokemon.dto';
import { AppConfig } from '../config';
import Axios from 'axios';

/**
 * Abstracts the backend API to request data
 *
 * @export
 * @class ApiClient
 */
export class ApiClient {
  public static async search(name: string): Promise<PokemonDTO> {
    const response = await Axios.get<PokemonDTO>(
      `${AppConfig.api.baseUrl}/pokemon/${name}`,
    );

    return response.data;
  }
}
