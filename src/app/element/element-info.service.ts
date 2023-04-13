import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { ElementInfo } from './element-info';

@Injectable({ providedIn: 'root' })
export class ElementInfoService {
  private elementInfoMap = new Map<string, ElementInfo>([
    [
      'air',
      {
        summary:
          'Porta nibh venenatis cras sed felis. A condimentum vitae sapien pellentesque habitant morbi tristique.',
        notableBenders: ['Appa', 'Momo', 'Aang', 'Monk Gyatso'],
        previousAvatars: ['Aang', 'Yangchen'],
        regions: ['Southern Air Temple', 'Northern Air Temple'],
        specialties: [
          'Flying',
          'Gliders',
          'Cloudbending',
          'Spiritual Projection',
          'Air Scooter',
          'Suffocation',
          'Hypersensitivity to Air',
        ],
      },
    ],
    [
      'water',
      {
        summary:
          'Orci eu lobortis elementum nibh tellus molestie. Risus sed vulputate odio ut enim blandit.',
        notableBenders: ['Katara', 'Princess Yue', 'Pakku', 'Hama', 'The moon'],
        previousAvatars: ['Korra', 'Kuruk'],
        regions: ['Southern Water Tribe', 'Northern Water Tribe'],
        specialties: [
          'Bloodbending',
          'Healing',
          'Water Whip',
          'Ice Claws',
          'Swamp Style',
          'Water Gliding',
          'Steam Manipulation',
        ],
      },
    ],
    [
      'fire',
      {
        summary:
          'Tincidunt praesent semper feugiat nibh sed pulvinar proin. Ipsum a arcu cursus vitae congue.',
        notableBenders: [
          'Zuko',
          'Uncle Iroh',
          'Princess Azula',
          'Jeong Jeong',
          'Fire Lord Ozai',
          'Dragons',
        ],
        previousAvatars: ['Roku', 'Szeto', 'Wan'],
        regions: ['The Fire Nation', 'Fire Islands'],
        specialties: [
          'Lightning-bending',
          'Fire Whip',
          'Fire Knives',
          'Jet Propulsion',
          'Fire Breathing',
          'Combustionbending',
        ],
      },
    ],
    [
      'earth',
      {
        summary:
          'Ut faucibus pulvinar elementum integer enim. Egestas diam in arcu cursus euismod quis.',
        notableBenders: [
          'Badgermoles',
          'King Bumi',
          'Toph',
          'Master Yu',
          'The Boulder',
        ],
        previousAvatars: ['Kyoshi'],
        regions: [
          'Ba Sing Se',
          'Omashu',
          'Tienhaishai',
          'State of Chenbao',
          'State of Gaoling',
          'State of Yi',
        ],
        specialties: [
          'Metalbending',
          'Lavabending',
          'Sandbending',
          'Earth Launch',
          'Earth Armor',
          'Stone Levitation',
          'Glassbending',
          'Seismic Sense',
        ],
      },
    ],
  ]);

  getElementInfo(element: string): Observable<ElementInfo> {
    return new Observable((subscriber) =>
      subscriber.next(this.elementInfoMap.get(element))
    );
  }
}
