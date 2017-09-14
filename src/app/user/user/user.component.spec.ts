import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserComponent } from './user.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MyService } from '../../service/my-service.service'
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      //schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return users', inject([MyService, MockBackend], (service: MyService, backend: MockBackend) => {
    let response = new ResponseOptions({
      body: JSON.stringify("MockUsers")
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );

    return service.getUsers().subscribe(data => {
      expect(data).toEqual("MockUsers");
    });

  }))
});
