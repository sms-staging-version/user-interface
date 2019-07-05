import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(cognitoService) {
        this.cognitoService = cognitoService;
        this.currentAddress = [
            {
                addressId: 1,
                alias: 'n.a',
                street: '123 Buena Vista Way',
                zip: '91193',
                city: 'InterpolateCity',
                state: 'California',
                country: 'USA',
                isTrainingLocation: false
            }
        ];
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
    };
    ProfileInfoComponent.prototype.someMethodToGrabAddressForUserViaUserPKGrabbedFromCognitoCurrentUserSession = function () {
        // retrieve user info
        // currentAddress[0] = service to retrieve address based on current user signed in
    };
    ProfileInfoComponent.prototype.someMethodToUpdateAddressOrUserInfo = function () {
        var userChange = false;
        var addChange = false;
        // -----------------
        var fnInput = document.getElementById('fName');
        var lnInput = document.getElementById('lName');
        var email = document.getElementById('email');
        var phoneN = document.getElementById('phoneN');
        if (fnInput.value !== this.currentUser[0].firstName
            || lnInput.value !== this.currentUser[0].lastName
            || email.value !== this.currentUser[0].email
            || phoneN.value !== this.currentUser[0].phoneNumber) {
            userChange = true;
            console.log('change is being made to user');
        }
        var addrs = document.getElementById('address');
        var cty = document.getElementById('city');
        var stt = document.getElementById('state');
        var cntry = document.getElementById('country');
        var zp = document.getElementById('zip');
        var als = document.getElementById('alias');
        if (addrs.value !== this.currentAddress[0].street
            || cty.value !== this.currentAddress[0].city
            || stt.value !== this.currentAddress[0].state
            || cntry.value !== this.currentAddress[0].country
            || zp.value !== this.currentAddress[0].zip
            || als.value !== this.currentAddress[0].alias) {
            console.log('change is being made to the address');
            addChange = true;
        }
    };
    ProfileInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-info',
            templateUrl: './profile-info.component.html',
            styleUrls: ['./profile-info.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [CognitoService])
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
}());
export { ProfileInfoComponent };
//# sourceMappingURL=profile-info.component.js.map