import { TestBed, inject } from '@angular/core/testing';

import { MailorderService } from './mailorder.service';

describe('MailorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailorderService]
    });
  });

  it('should be created', inject([MailorderService], (service: MailorderService) => {
    expect(service).toBeTruthy();
  }));
});
