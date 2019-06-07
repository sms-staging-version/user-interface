import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
Amplify.configure({
    Auth: {
        region: environment.awsRegion,
        userPoolId: environment.cognitoUserPoolId,
        userPoolWebClientId: environment.cognitoClientId,
    }
});
var CognitoService = /** @class */ (function () {
    // private grabUserJson:
    function CognitoService() {
        this.currentUserStream = new BehaviorSubject(undefined);
        this.currentUser$ = this.currentUserStream.asObservable();
        this.tokenStream = new BehaviorSubject(undefined);
        this.token$ = this.tokenStream.asObservable();
        this.newPasswordUser = null;
        this.setup();
    }
    CognitoService.prototype.login = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.signIn(username, password)];
                    case 1:
                        response = _a.sent();
                        /// ---Query by email for user info..
                        console.log(' email: ' + username);
                        console.log(response);
                        this.getCurrent();
                        if (response.challengeName !== 'NEW_PASSWORD_REQUIRED') {
                            this.setup();
                            return [2 /*return*/];
                        }
                        else {
                            this.newPasswordUser = response;
                            throw {
                                message: 'NEW_PASSWORD_REQUIRED'
                            };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CognitoService.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.signOut()];
                    case 1:
                        _a.sent();
                        this.tokenStream.next(undefined);
                        this.currentUserStream.next(undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    CognitoService.prototype.getCurrent = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CognitoService.prototype.setNewPassword = function (password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.completeNewPassword(this.newPasswordUser, password, {})];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        this.setup();
                        return [2 /*return*/];
                }
            });
        });
    };
    CognitoService.prototype.setup = function () {
        var _this = this;
        Auth.currentAuthenticatedUser()
            .then(function (user) {
            // initialize the jwt for axios
            Auth.currentSession()
                .then(function (data) {
                localStorage.setItem('token', data.getIdToken().getJwtToken());
                _this.tokenStream.next(data.getIdToken().getJwtToken());
                var currentUser = data.getIdToken().payload;
                _this.currentUserStream.next(currentUser);
            });
            // create interval to refresh the jwt periodically
            setInterval(function () {
                Auth.currentSession()
                    .then(function (data) {
                    localStorage.setItem('token', data.getIdToken().getJwtToken());
                    _this.tokenStream.next(data.getIdToken().getJwtToken());
                    var currentUser = data.getIdToken().payload;
                    _this.currentUserStream.next(currentUser);
                });
            }, 300000);
        })
            .catch(function (e) {
            return;
        });
    };
    CognitoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CognitoService);
    return CognitoService;
}());
export { CognitoService };
//# sourceMappingURL=cognito.service.js.map