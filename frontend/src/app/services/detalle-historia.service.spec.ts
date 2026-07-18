import { TestBed } from '@angular/core/testing';

import { DetalleHistoriaService } from './detalle-historia.service';

describe('DetalleHistoriaService', () => {
  let service: DetalleHistoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleHistoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
