import { async, TestBed } from '@angular/core/testing';
import { AnswerData3Component } from './answer-data3.component';
describe('AnswerData3Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnswerData3Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnswerData3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=answer-data3.component.spec.js.map