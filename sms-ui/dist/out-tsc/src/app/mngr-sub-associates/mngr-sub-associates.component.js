import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FakeServiceComponent } from '../fake-service/fake-service.component';
var MngrSubAssociatesComponent = /** @class */ (function () {
    function MngrSubAssociatesComponent(_fakeService) {
        this._fakeService = _fakeService;
        this._listFilter = '';
        this.wholeName = '';
        this.allAssociates = [];
        this.filteredEmployees = [];
        this.globalFart = '';
        this.returnableRoleValue = '';
        this.returnableEmailValue = '';
        this.returnableButton = document.createElement('button');
        this.filteredEmployees =
            this._fakeService.getEmployees();
        this.allAssociates = this.filteredEmployees;
    }
    Object.defineProperty(MngrSubAssociatesComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (temp) {
            this._listFilter = temp;
            this.filteredEmployees = this._listFilter ? this.performFilter(this._listFilter) : this.allAssociates;
        },
        enumerable: true,
        configurable: true
    });
    MngrSubAssociatesComponent.prototype.ngOnInit = function () {
    };
    MngrSubAssociatesComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.allAssociates.filter(function (metaEmployee) {
            return (metaEmployee.firstName.toLocaleLowerCase().concat(metaEmployee.lastName.toLocaleLowerCase())).indexOf(filterBy) !== -1;
        });
    };
    MngrSubAssociatesComponent.prototype.optionSelect = function () {
        var e = (document.getElementById('selectElement'));
        var index = e.selectedIndex;
        // console.log('index: ' + index);//test
        var opt = e.options[index];
        var value = opt.value;
        if (value !== 'All') {
            console.log('VALUE: ' + value); //test
            this.filteredEmployees = this.allAssociates.filter(function (metaEmployee) {
                return metaEmployee.role == value;
            });
        }
        else {
            this.filteredEmployees = this.allAssociates;
        }
    };
    MngrSubAssociatesComponent.prototype.editRole = function (email) {
        var selectedInquiry = document.getElementById(this.returnableEmailValue);
        console.log("when nothign is slectec: " + selectedInquiry); //test-
        var grabDataCell = document.getElementById(email);
        if (selectedInquiry !== null) {
            selectedInquiry.appendChild(this.returnableButton);
            while (selectedInquiry.firstChild) {
                selectedInquiry.removeChild(selectedInquiry.firstChild);
            }
            selectedInquiry.appendChild(this.returnableButton);
            this.returnableButton = grabDataCell.firstChild;
        }
        else {
            this.returnableButton = grabDataCell.firstChild;
        }
        console.log("email of user: " + email);
        //  const grabDataCell = document.getElementById(email) as HTMLDataListElement;
        var currentRole;
        var childButton = grabDataCell.firstChild;
        currentRole = childButton.innerText;
        //--This value is used later to return the previous role when a new selection is made - 
        this.returnableRoleValue = childButton.innerText;
        //this keeps track of the last selection - 
        this.returnableEmailValue = email;
        //--
        console.log("the button currently holds: " + childButton.innerHTML);
        while (grabDataCell.firstChild) {
            currentRole = grabDataCell.firstChild.textContent;
            grabDataCell.removeChild(grabDataCell.firstChild);
        }
        var NewRole = document.createElement('select');
        NewRole.onchange = this.changeRole;
        NewRole.setAttribute('id', 'selectedRoleRow');
        NewRole.setAttribute('class', email);
        var optAdmin = document.createElement('option');
        optAdmin.textContent = "Admin";
        var optStagingM = document.createElement('option');
        optStagingM.textContent = "Staging Managers";
        var optAssociate = document.createElement('option');
        optAssociate.textContent = "Associate";
        var optTrainer = document.createElement('option');
        optTrainer.textContent = "Trainer";
        //cycle until we find the current role and make that one first - 
        var ArrayOfOptions = [optAdmin, optStagingM, optAssociate, optTrainer];
        var ArrayOfNoneCurrentOptions = new Array;
        ArrayOfOptions.forEach(function (PossibleFirstOptionElement) {
            //too short
            PossibleFirstOptionElement.innerText = PossibleFirstOptionElement.innerText + " ";
            console.log("inside foreach: " + PossibleFirstOptionElement.textContent.length);
            console.log('against..');
            console.log(" - " + currentRole.length);
            if (PossibleFirstOptionElement.innerText.length == childButton.innerText.length) {
                console.log("current option should be " + PossibleFirstOptionElement.textContent);
                NewRole.appendChild(PossibleFirstOptionElement); //append the current one so that it shows first - 
            }
            else {
                ArrayOfNoneCurrentOptions.push(PossibleFirstOptionElement);
                //should result in three that we have not appendd yet - 
            }
        });
        ArrayOfNoneCurrentOptions.forEach(function (OptionElement) {
            NewRole.appendChild(OptionElement);
        });
        grabDataCell.appendChild(NewRole);
        // a service is needed to update user info by the email assocaited with their row - 
    };
    MngrSubAssociatesComponent.prototype.changeRole = function () {
        var newSpot = document.getElementById('selectedRoleRow');
        var emailIdentifier = newSpot.className;
        var index = newSpot.selectedIndex;
        var opt = newSpot.options[index];
        //this values will be used to update the user's role per their email as the identifier.. 
        console.log("role has been changed to " + opt.value + " for:" + emailIdentifier); //onChange test -
    };
    MngrSubAssociatesComponent.prototype.inputNewRole = function () {
        //how to enter on 'enter' key
        //myInputElement.addEventListener('keyup', this.inputNewRole);
        console.log("enterkey pressed");
    };
    MngrSubAssociatesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-mngr-sub-associates',
            templateUrl: './mngr-sub-associates.component.html',
            styleUrls: ['./mngr-sub-associates.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FakeServiceComponent])
    ], MngrSubAssociatesComponent);
    return MngrSubAssociatesComponent;
}());
export { MngrSubAssociatesComponent };
//# sourceMappingURL=mngr-sub-associates.component.js.map