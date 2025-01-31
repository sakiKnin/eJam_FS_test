import { Test, TestingModule } from '@nestjs/testing';
import { SuperHeroController } from './app.controller';
import { SuperHeroService } from './app.service';

describe('AppController', () => {
  let appController: SuperHeroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SuperHeroController],
      providers: [SuperHeroService],
    }).compile();

    appController = app.get<SuperHeroController>(SuperHeroController);
  });

  describe('root', () => {
    it('should return an array of SuperHeros', () => {
      const mockSuperHeros = [
        { id: 1, name: 'Superman', superPower: 'Flight', humilityScore: 9 },
        {
          id: 2,
          name: 'Batman',
          superPower: 'Martial Arts',
          humilityScore: 2,
        },
      ];

      jest
        .spyOn(appController, 'getAllSuperHeros')
        .mockReturnValue(mockSuperHeros);

      expect(appController.getAllSuperHeros()).toEqual(mockSuperHeros);
    });
    it('should return an array of SuperHeros', () => {
      const mockSuperHeros = [
        { id: 1, name: 'Superman', superPower: 'Flight', humilityScore: 9 },
        {
          id: 2,
          name: 'Batman',
          superPower: 'Martial Arts',
          humilityScore: 22,
        },
      ];

      jest
        .spyOn(appController, 'getAllSuperHeros')
        .mockReturnValue(mockSuperHeros);

      expect(appController.getAllSuperHeros()).toEqual(mockSuperHeros);
    });

    it('should create and return superHero ', () => {
      const superHero = {
        name: 'Superman',
        superPower: 'Flight',
        humilityScore: 8,
      };

      jest.spyOn(appController, 'addSuperHero');

      const result = appController.addSuperHero(superHero);

      expect(result).toHaveProperty('name', 'Superman');
      expect(result).toHaveProperty('superPower', 'Flight');
      expect(result).toHaveProperty('humilityScore', 8);
    });

    it('should return validation error ', () => {
      const superHero = {
        name: 'Superman',
        superPower: 'Flight',
        humilityScore: 12,
      };

      jest.spyOn(appController, 'addSuperHero');

      const result = appController.addSuperHero(superHero);

      expect(result).toEqual(
        'The humilityScore field must be between 1 and 10.',
      );
    });
  });
});
