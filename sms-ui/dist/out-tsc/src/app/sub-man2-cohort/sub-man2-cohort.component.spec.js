import { async, TestBed } from '@angular/core/testing';
import { SubMan2CohortComponent } from './sub-man2-cohort.component';
describe('SubMan2CohortComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SubMan2CohortComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SubMan2CohortComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sub-man2-cohort.component.spec.js.map