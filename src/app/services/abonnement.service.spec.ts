import { TestBed } from '@angular/core/testing';

import { Abonnement } from './abonnement.service';

describe('AbonnementService', () => {
  let service: Abonnement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Abonnement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
