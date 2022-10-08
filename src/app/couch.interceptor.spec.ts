import { TestBed } from '@angular/core/testing';

import { CouchInterceptor } from './couch.interceptor';

describe('CouchInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CouchInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CouchInterceptor = TestBed.inject(CouchInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
