import { QuizAnswer, QuizQuestion } from './quiz-question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizList: QuizQuestion[] = [
    {
      value: 'Where does your journey begin?',
      answers: [
        {
          value: 'Water Tribe',
          element: 'water',
        },
        {
          value: 'Earth Kingdom',
          element: 'earth',
        },
        {
          value: 'Fire Nation',
          element: 'fire',
        },
        {
          value: 'Air Nomads',
          element: 'air',
        },
      ],
      id: '1',
    },

    {
      value: 'Pick a companion.',
      answers: [
        {
          value: 'Turtle Duck',
          element: 'water',
        },
        {
          value: 'Badgermole',
          element: 'earth',
        },
        {
          value: 'Lizard',
          element: 'fire',
        },
        {
          value: 'Flying Bison',
          element: 'air',
        },
      ],
      id: '2',
    },

    {
      value: 'Pick a powerful spirit to guide you.',
      answers: [
        {
          value: 'Princess Yue',
          element: 'water',
        },
        {
          value: 'Koh',
          element: 'earth',
        },
        {
          value: 'Fang the Dragon',
          element: 'fire',
        },
        {
          value: 'Wan Shi Tong',
          element: 'air',
        },
      ],
      id: '3',
    },

    {
      value: 'How do you relax?',
      answers: [
        {
          value: 'Playing a riveting game of Pai Sho',
          element: 'water',
        },
        {
          value: 'Selling cabbages, duh!',
          element: 'earth',
        },
        {
          value: 'Dueling it out in the Pro-Bending arena',
          element: 'earth',
        },
        {
          value: 'Tearing it up on the kauiball court',
          element: 'fire',
        },
        {
          value: 'Gliding your way thorugh life',
          element: 'air',
        },
      ],
      id: '4',
    },

    {
      value: 'Who would be your best friend from the crew? ',
      answers: [
        {
          value: 'Katara',
          element: 'water',
        },
        {
          value: 'Toph',
          element: 'earth',
        },
        {
          value: 'Zuko',
          element: 'fire',
        },
        {
          value: 'Aang',
          element: 'air',
        },
      ],
      id: '5',
    },

    {
      value: 'Pick an obscure bending technique to master!',
      answers: [
        {
          value: 'Bloodbending',
          element: 'water',
        },
        {
          value: 'Metalbending',
          element: 'earth',
        },
        {
          value: 'Lightning Bending',
          element: 'fire',
        },
        {
          value: 'Energybending',
          element: 'air',
        },
      ],
      id: '6',
    },

    {
      value: 'Pick a White Lotus member to serve as your mentor.',
      answers: [
        {
          value: 'Pakku',
          element: 'water',
        },
        {
          value: 'Bumi',
          element: 'earth',
        },
        {
          value: 'Jeong Jeong',
          element: 'fire',
        },
        {
          value: 'Tenzin',
          element: 'air',
        },
      ],
      id: '7',
    },

    {
      value: 'Which fashion style will be your signature look?',
      answers: [
        {
          value: 'functional fashion',
          element: 'water',
        },
        {
          value: 'unabashedly extravagant',
          element: 'earth',
        },
        {
          value: 'all red, all the time',
          element: 'fire',
        },
        {
          value: 'traditional plus tattoos',
          element: 'air',
        },
      ],
      id: '8',
    },
  ];

  private elementValueMap = new Map<string, number>([
    ['air', 1],
    ['water', 2],
    ['earth', 3],
    ['fire', 4],
  ]);

  constructor() {}

  get quizQuestions(): QuizQuestion[] {
    return this.quizList;
  }

  calculateElement(answers: QuizAnswer[]): string {
    var sum = answers
      .map((answer) => this.elementValueMap.get(answer.element) ?? 0)
      .reduce((prevValue, currValue) => prevValue + currValue);
    var average = sum / answers.length;
    var roundedAverage = Math.round(average);
    var result = 'air';
    for (let [key, value] of this.elementValueMap.entries()) {
      if (value === roundedAverage) {
        result = key;
      }
    }
    return result;
  }
}
