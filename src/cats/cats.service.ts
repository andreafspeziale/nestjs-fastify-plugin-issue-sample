import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{ name: 'kitty', age: 1, breed: 'random' }];

  findAll(): Cat[] {
    return this.cats;
  }
}
