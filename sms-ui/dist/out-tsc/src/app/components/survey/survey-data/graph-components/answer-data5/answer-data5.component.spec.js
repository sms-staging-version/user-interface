import { async, TestBed } from '@angular/core/testing';
import { AnswerData5Component } from './answer-data5.component';
describe('AnswerData5Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnswerData5Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnswerData5Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=answer-data5.component.spec.js.map