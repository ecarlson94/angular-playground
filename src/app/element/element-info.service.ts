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
          "Airbending, one of the four elemental bending arts, is the aerokinetic ability to control and manipulate air. The peaceful Air Nomads utilized this type of bending in their everyday lives. \n\nAir is the element of freedom. The Air Nomads detached themselves from worldly problems and concerns; finding peace and freedom was the key to solving their difficulties in life. Airbenders continually sought spiritual enlightenment, and, as a result, all children born into the Air Nomads were benders. The first airbenders learned their art from the flying bison. \n\nThe key to airbending is flexibility and finding and following the path of least resistance. Airbending is notable for being almost purely defensive, as well as the most dynamic of the four bending arts. Airbenders can overwhelm many opponents at once with large and powerful attacks that could prove fatal; however, due to the pacifist nature of the Air Nomads, such attacks are rarely used. Instead, an airbender strives to use the opponents' energy against them. Due to their aforementioned spirituality, they often adapt to the situation surrounding them and employ negative jing, preferring evasive maneuvers as opposed to direct confrontation.",
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
        image: '/assets/images/AirKingdom.jpg',
      },
    ],
    [
      'water',
      {
        summary:
          "Waterbending, one of the four elemental bending arts, is the hydrokinetic ability to control water in all of its various forms. This type of bending is used by the people of the Water Tribe, who are divided into the Southern, Northern, and lesser-known Foggy Swamp tribes, as well as those of the United Republic, each with their own unique bending style. \n\nWater is the element of change. The moon is the source of power in waterbending, and the original waterbenders learned to bend by observing how the moon pushed and pulled the tides. The Water Tribes are the only people who did not learn to bend from an animal, though the Moon and Ocean Spirits took the form of koi fish in the mortal world near the beginning of the Avatar world. \n\nThe fighting style of waterbending is mostly fluid and graceful, acting in concert with the environment. Waterbenders deal with the flow of energy; they let their defense become their offense, turning their opponents' own forces against them. Even when waterbenders do take an attack stance, their moves always appear to flow from one to the other, mimicking the flow of the water they bend. Foggy Swamp style waterbending, however, is more rigid and straight, allowing for more direct bursts instead of long flowing streams of water.",
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
        image: '/assets/images/waterKingdom.jpg',
      },
    ],
    [
      'fire',
      {
        summary:
          'Firebending, one of the four elemental bending arts, is the pyrokinetic ability to control and produce fire. It is unique among the bending arts, as it is the only one in which the performer can generate the element. The first human firebenders lived in a city atop a lion turtle during the era of Raava and the art later spread to the Sun Warriors, the Fire Nation, and the United Republic of Nations. The Earth Kingdom also has a small firebending minority. \n\nAs described by Iroh, fire is the element of power, consisting of overpowering force tempered by the unflinching will to accomplish tasks and desires. However, during the Hundred Year War, a militaristic Fire Nation twisted this into firebending being fueled by rage, hatred, and anger. Firebending draws its power from the sun, and the first human firebenders derived their firebending techniques from the dragons. \n\nFirebending is known for its intense and aggressive attacking style and general lack of adequate defensive moves, although firebenders can modify offensive maneuvers to function as a defense, such as creating large walls of fire or shooting down incoming attacks with fire jabs.',
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
        image: '/assets/images/FireKingdom.jpg',
      },
    ],
    [
      'earth',
      {
        summary:
          "Earthbending, one of the four elemental bending arts, is the geokinetic ability to manipulate earth and rock in all their various forms, prevalent in the Earth Kingdom and the United Republic. \n\nEarth is the element of substance, while the people of the Earth Kingdom are diverse, strong, and enduring. Following the lion turtles' decision to relinquish their role as protectors of mankind, Oma and Shu were the first earthbenders to learn this art from the badgermoles. \n\nThe key to earthbending is utilizing neutral jing, which involves waiting and listening for the right moment to strike and, when that moment comes, acting decisively. In other words, earthbenders generally endure their enemies' attacks until the right opportunity to counterattack reveals itself.",
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
        image: '/assets/images/EarthKingdom.jpg',
      },
    ],
  ]);

  getElementInfo(element: string): Observable<ElementInfo> {
    return new Observable((subscriber) =>
      subscriber.next(this.elementInfoMap.get(element))
    );
  }
}
