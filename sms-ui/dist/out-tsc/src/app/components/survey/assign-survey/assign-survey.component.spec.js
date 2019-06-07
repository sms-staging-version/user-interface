import { async, TestBed } from '@angular/core/testing';
import { AssignSurveyComponent } from './assign-survey.component';
describe('AssignSurveyComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AssignSurveyComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AssignSurveyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=assign-survey.component.spec.js.map