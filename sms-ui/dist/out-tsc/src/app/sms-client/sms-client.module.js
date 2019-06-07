import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SmsInterceptor } from './interceptors/sms.interceptor';
import { UsersClientService } from './clients/users-client.service';
import { SurveyService } from './clients/survey.service';
import { SurveyQuestionService } from './clients/surveyquestion.service';
var SmsClientModule = /** @class */ (function () {
    function SmsClientModule() {
    }
    SmsClientModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                HttpClientModule
            ],
            providers: [
                UsersClientService,
                SurveyService,
                SurveyQuestionService,
                { provide: HTTP_INTERCEPTORS, useClass: SmsInterceptor, multi: true }
            ]
        })
    ], SmsClientModule);
    return SmsClientModule;
}());
export { SmsClientModule };
//# sourceMappingURL=sms-client.module.js.map