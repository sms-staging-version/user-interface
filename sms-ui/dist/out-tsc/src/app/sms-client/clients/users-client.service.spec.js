import { TestBed } from '@angular/core/testing';
import { UsersClientService } from './users-client.service';
describe('UsersClientService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UsersClientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=users-client.service.spec.js.map