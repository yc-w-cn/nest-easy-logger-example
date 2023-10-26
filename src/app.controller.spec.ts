import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.basicUse()).toBe('Hello World!');
    });
  });

  describe('custom', () => {
    it('should return "Hello World!"', () => {
      expect(appController.customUse()).toBe('Hello World!');
    });
  });
});
