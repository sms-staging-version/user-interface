import { TestBed } from '@angular/core/testing';
import { InterviewService } from './interview.service';
describe('InterviewService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(InterviewService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=interview.service.spec.js.map