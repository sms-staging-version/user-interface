import { async, TestBed } from '@angular/core/testing';
import { StagingMgrFeedbackComponent } from './staging-mgr-feedback.component';
describe('StagingMgrFeedbackComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StagingMgrFeedbackComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StagingMgrFeedbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=staging-mgr-feedback.component.spec.js.map