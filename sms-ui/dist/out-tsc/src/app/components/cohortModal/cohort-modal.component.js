import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CohortModalComponent = /** @class */ (function () {
    function CohortModalComponent(http) {
        this.http = http;
    }
    CohortModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAssociates(this.cohort.cohortId).toPromise().then(function (data) {
            _this.userList = data;
        });
    };
    CohortModalComponent.prototype.getAssociates = function (id) {
        return this.http.get("/users/cohorts/" + id);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CohortModalComponent.prototype, "cohort", void 0);
    CohortModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cohort-modal',
            templateUrl: './cohort-modal.component.html',
            styleUrls: ['./cohort-modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CohortModalComponent);
    return CohortModalComponent;
}());
export { CohortModalComponent };
//# sourceMappingURL=cohort-modal.component.js.map