import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var UsersClientService = /** @class */ (function () {
    function UsersClientService(http) {
        this.http = http;
        this.context = 'user-service/users';
    }
    UsersClientService.prototype.findById = function (id) {
        return this.http.get(this.context + "/" + id);
    };
    UsersClientService.prototype.findByEmail = function (email) {
        return this.http.get(this.context + "/email/" + email);
    };
    UsersClientService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsersClientService);
    return UsersClientService;
}());
export { UsersClientService };
//# sourceMappingURL=users-client.service.js.map