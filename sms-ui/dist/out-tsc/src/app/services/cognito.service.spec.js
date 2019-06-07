import { TestBed } from '@angular/core/testing';
import { CognitoService } from './cognito.service';
describe('CognitoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CognitoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cognito.service.spec.js.map