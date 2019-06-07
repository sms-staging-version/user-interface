import { async, TestBed } from '@angular/core/testing';
import { MngrSubAssociatesComponent } from './mngr-sub-associates.component';
describe('MngrSubAssociatesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MngrSubAssociatesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MngrSubAssociatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mngr-sub-associates.component.spec.js.map