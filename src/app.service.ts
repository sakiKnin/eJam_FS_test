import { Injectable } from '@nestjs/common';
import { SuperHero, superHeros, superHeroRules } from './superHeroModel';
import * as Validator from 'validatorjs';
@Injectable()
export class SuperHeroService {
  getAllSuperHeros(): SuperHero[] {
    return [...superHeros].sort((a, b) => b.humilityScore - a.humilityScore);
  }

  create(superHero: Partial<SuperHero>): SuperHero {
    const newID = superHeros[superHeros.length - 1].id + 1;

    const newSuperHero: SuperHero = {
      id: newID,
      name: superHero.name ?? '',
      superPower: superHero.superPower ?? '',
      humilityScore: superHero.humilityScore ?? 0,
    };

    superHeros.push(newSuperHero);

    return newSuperHero;
  }

  validate(superHero: Partial<SuperHero>): {
    isValid: boolean;
    validationMessage: string;
  } {
    let validation = new Validator(superHero, superHeroRules);

    const isValid = validation.passes();
    let validationMessage: string = 'Super Hero Request Body is Valid!';
    if (!isValid) {
      validationMessage = '';
      if (validation.errors.get('name')) {
        validationMessage += validation.errors.get('name');
      }
      if (validation.errors.get('superPower')) {
        validationMessage += validation.errors.get('superPower');
      }
      if (validation.errors.get('humilityScore')) {
        validationMessage += validation.errors.get('humilityScore');
      }
    }
    return { isValid, validationMessage };
  }
}
