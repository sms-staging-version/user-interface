import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersClientService } from 'src/app/sms-client/clients/users-client.service';
import { CognitoService } from 'src/app/services/cognito.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userClient, cognito) {
        this.userClient = userClient;
        this.cognito = cognito;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubscription = this.cognito.currentUser$.subscribe(function (user) {
            _this.userClient.findByEmail(user.email).subscribe(function (succResp) {
                console.log(succResp);
                _this.user = succResp;
            }, function (err) {
                console.log(err);
            });
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // ensures that we don't try calling unsubscribe on undefined
        if (this.currentUserSubscription) {
            this.currentUserSubscription.unsubscribe();
        }
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UsersClientService, CognitoService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map