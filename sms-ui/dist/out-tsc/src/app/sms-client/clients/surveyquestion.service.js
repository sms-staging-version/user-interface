import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SurveyQuestionService = /** @class */ (function () {
    function SurveyQuestionService(http) {
        this.http = http;
        this.context = 'survey-service/junction_survey_questions';
    }
    SurveyQuestionService.prototype.getTemplate = function (surveyId) {
        return this.http.get(this.context + "/surveyId/" + surveyId);
    };
    SurveyQuestionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SurveyQuestionService);
    return SurveyQuestionService;
}());
export { SurveyQuestionService };
//# sourceMappingURL=surveyquestion.service.js.map