import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FakeServiceComponent } from '../fake-service/fake-service.component';
import { HttpClient } from '@angular/common/http';
var SubMan2CohortComponent = /** @class */ (function () {
    function SubMan2CohortComponent(_fakeService, http) {
        // this.filteredCohort =
        // this._fakeService.getCohorts();
        this._fakeService = _fakeService;
        this.http = http;
        this._listFilter = '';
        this.modalShow = false;
        this.display = 'none';
        this.wholeName = '';
        this.allCohorts = [];
        this.allCohorts = this.filteredCohort;
    }
    Object.defineProperty(SubMan2CohortComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (temp) {
            this._listFilter = temp;
            this.filteredCohort = this._listFilter ? this.performFilter(this._listFilter) : this.allCohorts;
        },
        enumerable: true,
        configurable: true
    });
    SubMan2CohortComponent.prototype.openModal = function (name) {
        for (var _i = 0, _a = this.filteredCohort; _i < _a.length; _i++) {
            var temp = _a[_i];
            if (temp['cohortName'] == name) {
                this.exportedCohort = temp;
                this.modalShow = true;
                this.display = 'block';
            }
        }
    };
    SubMan2CohortComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.allCohorts.filter(function (metaEmployee) {
            return metaEmployee['cohortName'].toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    SubMan2CohortComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('cohorts').toPromise().then(function (data) {
            _this.filteredCohort = data;
            _this.allCohorts = _this.filteredCohort;
            _this.exportedCohort = data[1];
        });
    };
    SubMan2CohortComponent.prototype.closeModal = function () {
        this.modalShow = false;
        this.display = 'none';
    };
    SubMan2CohortComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sub-man2-cohort',
            templateUrl: './sub-man2-cohort.component.html',
            styleUrls: ['./sub-man2-cohort.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FakeServiceComponent, HttpClient])
    ], SubMan2CohortComponent);
    return SubMan2CohortComponent;
}());
export { SubMan2CohortComponent };
//# sourceMappingURL=sub-man2-cohort.component.js.map