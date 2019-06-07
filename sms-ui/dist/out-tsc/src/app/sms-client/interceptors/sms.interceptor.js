import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { environment } from 'src/environments/environment';
var SmsInterceptor = /** @class */ (function () {
    function SmsInterceptor(cognito) {
        var _this = this;
        this.cognito = cognito;
        cognito.token$.subscribe(function (token) {
            _this.token = token;
        });
    }
    SmsInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            url: environment.smsGateway + "/" + request.url + "/",
            setHeaders: {
                Authorization: "Bearer " + this.token
            }
        });
        return next.handle(request);
    };
    SmsInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [CognitoService])
    ], SmsInterceptor);
    return SmsInterceptor;
}());
export { SmsInterceptor };
//# sourceMappingURL=sms.interceptor.js.map