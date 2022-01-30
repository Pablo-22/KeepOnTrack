/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StopwatchesService } from './stopwatches.service';

describe('Service: Stopwatches', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopwatchesService]
    });
  });

  it('should ...', inject([StopwatchesService], (service: StopwatchesService) => {
    expect(service).toBeTruthy();
  }));
});
