import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
