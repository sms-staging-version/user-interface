import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { Location } from '@angular/common';
/**
 * this is incomplete
 */
var AuthLoadingComponent = /** @class */ (function () {
    function AuthLoadingComponent(cognito, location) {
        this.cognito = cognito;
        this.location = location;
    }
    AuthLoadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cognito.token$.subscribe(function (token) {
            if (token) {
                _this.location.back();
            }
        });
    };
    AuthLoadingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-auth-loading',
            templateUrl: './auth-loading.component.html',
            styleUrls: ['./auth-loading.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CognitoService, Location])
    ], AuthLoadingComponent);
    return AuthLoadingComponent;
}());
export { AuthLoadingComponent };
//# sourceMappingURL=auth-loading.component.js.map