import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(cognitoService, router) {
        this.cognitoService = cognitoService;
        this.router = router;
        this.username = '';
        this.password = '';
        this.newPasswordRequired = false;
        this.newPassword = '';
        this.confirmationPassword = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cognitoService.login(this.username, this.password)];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('/home');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        if (err_1.message === 'NEW_PASSWORD_REQUIRED') {
                            this.newPasswordRequired = true;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.submitNewPassword = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cognitoService.setNewPassword(this.newPassword)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        if (err_2.message === 'NEW_PASSWORD_REQUIRED') {
                            this.newPasswordRequired = true;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CognitoService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map