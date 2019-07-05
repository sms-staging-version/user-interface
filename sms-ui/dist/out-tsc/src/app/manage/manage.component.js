import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ManageComponent = /** @class */ (function () {
    function ManageComponent(http) {
        this.http = http;
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    ManageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manage',
            templateUrl: './manage.component.html',
            styleUrls: ['./manage.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ManageComponent);
    return ManageComponent;
}());
export { ManageComponent };
//# sourceMappingURL=manage.component.js.map