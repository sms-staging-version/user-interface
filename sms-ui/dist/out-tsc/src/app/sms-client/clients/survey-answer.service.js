import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SurveyAnswerService = /** @class */ (function () {
    function SurveyAnswerService(http) {
        this.http = http;
        this.context = 'survey-service/answers';
    }
    SurveyAnswerService.prototype.findByQuestionId = function (qId) {
        return this.http.get(this.context + "/question/" + qId);
    };
    SurveyAnswerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SurveyAnswerService);
    return SurveyAnswerService;
}());
export { SurveyAnswerService };
//# sourceMappingURL=survey-answer.service.js.map