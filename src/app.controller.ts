import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperHeroService } from './app.service';
import { SuperHero } from './superHeroModel';

@Controller('superheroes')
export class SuperHeroController {
  constructor(private readonly superHeroService: SuperHeroService) {}

  @Get()
  getAllSuperHeros(): SuperHero[] {
    return this.superHeroService.getAllSuperHeros();
  }

  @Post()
  addSuperHero(@Body() superHero: Partial<SuperHero>): SuperHero | string {
    const superHeroData: Partial<SuperHero> = superHero;

    const validationResult = this.superHeroService.validate(superHeroData);

    if (!validationResult.isValid) {
      return validationResult.validationMessage;
    }
    return this.superHeroService.create(superHeroData);
  }
}
