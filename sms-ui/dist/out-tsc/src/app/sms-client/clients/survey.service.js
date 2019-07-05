import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.context = 'survey-service/surveys';
    }
    SurveyService.prototype.findAll = function () {
        return this.http.get("" + this.context);
    };
    SurveyService.prototype.closeSurvey = function (surveyToUpdate) {
        return this.http.post("" + this.context, surveyToUpdate);
    };
    SurveyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SurveyService);
    return SurveyService;
}());
export { SurveyService };
//# sourceMappingURL=survey.service.js.map