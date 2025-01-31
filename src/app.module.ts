import { Module } from '@nestjs/common';
import { SuperHeroController } from './app.controller';
import { SuperHeroService } from './app.service';

@Module({
  imports: [],
  controllers: [SuperHeroController],
  providers: [SuperHeroService],
})
export class AppModule {}
