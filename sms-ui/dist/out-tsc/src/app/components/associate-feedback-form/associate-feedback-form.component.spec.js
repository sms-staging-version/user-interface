import { async, TestBed } from '@angular/core/testing';
import { AssociateFeedbackFormComponent } from './associate-feedback-form.component';
describe('AssociateFeedbackFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AssociateFeedbackFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AssociateFeedbackFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=associate-feedback-form.component.spec.js.map