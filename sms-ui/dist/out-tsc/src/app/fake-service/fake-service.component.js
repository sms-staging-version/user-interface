import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FakeServiceComponent = /** @class */ (function () {
    function FakeServiceComponent() {
    }
    FakeServiceComponent.prototype.ngOnInit = function () {
    };
    FakeServiceComponent.prototype.getEmployees = function () {
        return [
            {
                firstName: 'Frozone',
                lastName: 'Cable',
                role: 'Admin',
                email: 'coldasice@email.com'
            },
            {
                firstName: 'Eraser',
                lastName: 'Animeguy',
                role: 'Trainer',
                email: 'eraseyomama@email.com'
            },
            {
                firstName: 'Static',
                lastName: 'Shock',
                role: 'Staging Managers',
                email: 'Shocker@email.com'
            }
        ];
    };
    FakeServiceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-fake-service',
            templateUrl: './fake-service.component.html',
            styleUrls: ['./fake-service.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FakeServiceComponent);
    return FakeServiceComponent;
}());
export { FakeServiceComponent };
//# sourceMappingURL=fake-service.component.js.map