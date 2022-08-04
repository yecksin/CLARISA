import { Test, TestingModule } from '@nestjs/testing';
import { GlossaryController } from './glossary.controller';
import { GlossaryService } from './glossary.service';

describe('GlossaryController', () => {
  let controller: GlossaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlossaryController],
      providers: [GlossaryService],
    }).compile();

    controller = module.get<GlossaryController>(GlossaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
