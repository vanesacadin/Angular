import { UpRoutingModule } from './up-routing.module';

describe('UpRoutingModule', () => {
  let upRoutingModule: UpRoutingModule;

  beforeEach(() => {
    upRoutingModule = new UpRoutingModule();
  });

  it('should create an instance', () => {
    expect(upRoutingModule).toBeTruthy();
  });
});
