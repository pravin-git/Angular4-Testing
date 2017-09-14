import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MyService } from './my-service.service';
import { MockBackend, MockConnection } from '@angular/http/testing';


describe('MyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([MyService], (service: MyService) => {
    expect(service).toBeTruthy();
  }));
});
