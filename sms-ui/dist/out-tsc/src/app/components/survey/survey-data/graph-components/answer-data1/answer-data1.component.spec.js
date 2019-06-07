import { async, TestBed } from '@angular/core/testing';
import { AnswerData1Component } from './answer-data1.component';
/* Do we even test? */
describe('AnswerData1Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnswerData1Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnswerData1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=answer-data1.component.spec.js.map