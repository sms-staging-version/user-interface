'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sms-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' : 'data-target="#xs-components-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' :
                                            'id="xs-components-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' }>
                                            <li class="link">
                                                <a href="components/AnswerData1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnswerData2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnswerData3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnswerData4Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData4Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnswerData5Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData5Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnswerData6Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData6Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnswerData7Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerData7Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignSurveyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssignSurveyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssociateFeedbackFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssociateFeedbackFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthLoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthLoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AutodataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutodataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CohortModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CohortModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DaynoticeGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DaynoticeGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DaynoticeReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DaynoticeReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FakeServiceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FakeServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbackReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedbackReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewListForCurUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewListForCurUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JobdescReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JobdescReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MngrSubAssociatesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MngrSubAssociatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewInterviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewInterviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StagingMgrFeedbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StagingMgrFeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubMan2CohortComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubMan2CohortComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyCreatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyCreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyRespondentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyRespondentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' : 'data-target="#xs-injectables-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' :
                                        'id="xs-injectables-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' }>
                                        <li class="link">
                                            <a href="injectables/CognitoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CognitoService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' : 'data-target="#xs-pipes-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' :
                                            'id="xs-pipes-links-module-AppModule-fb6082f26ee11de38610a9a53a2414a9"' }>
                                            <li class="link">
                                                <a href="pipes/TimestampPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimestampPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SmsClientModule.html" data-type="entity-link">SmsClientModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SmsClientModule-892d610b651150585248dc0df1430cb8"' : 'data-target="#xs-injectables-links-module-SmsClientModule-892d610b651150585248dc0df1430cb8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SmsClientModule-892d610b651150585248dc0df1430cb8"' :
                                        'id="xs-injectables-links-module-SmsClientModule-892d610b651150585248dc0df1430cb8"' }>
                                        <li class="link">
                                            <a href="injectables/CohortService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CohortService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SurveyAnswerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SurveyAnswerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SurveyQuestionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SurveyQuestionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SurveyResponseService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SurveyResponseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SurveyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SurveyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersClientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InterviewComponent-1.html" data-type="entity-link">InterviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SurveyComponent.html" data-type="entity-link">SurveyComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressObject.html" data-type="entity-link">AddressObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/Answer.html" data-type="entity-link">Answer</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewInterviewData.html" data-type="entity-link">NewInterviewData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link">Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/Responses.html" data-type="entity-link">Responses</a>
                            </li>
                            <li class="link">
                                <a href="classes/status.html" data-type="entity-link">status</a>
                            </li>
                            <li class="link">
                                <a href="classes/Survey.html" data-type="entity-link">Survey</a>
                            </li>
                            <li class="link">
                                <a href="classes/SurveyHistory.html" data-type="entity-link">SurveyHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/SurveyQuestion.html" data-type="entity-link">SurveyQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserObj.html" data-type="entity-link">UserObj</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AssociateFeedback.html" data-type="entity-link">AssociateFeedback</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssociateFeedbackService.html" data-type="entity-link">AssociateFeedbackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutodataService.html" data-type="entity-link">AutodataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DaynoticeService.html" data-type="entity-link">DaynoticeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterviewService.html" data-type="entity-link">InterviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewInterviewService.html" data-type="entity-link">NewInterviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionOfSurveyService.html" data-type="entity-link">QuestionOfSurveyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StagingmanagerService.html" data-type="entity-link">StagingmanagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SurveyHistoryService.html" data-type="entity-link">SurveyHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SurveyHistoryService-1.html" data-type="entity-link">SurveyHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateInfoService.html" data-type="entity-link">UpdateInfoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SmsInterceptor.html" data-type="entity-link">SmsInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActualDayNotice.html" data-type="entity-link">ActualDayNotice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssociateFeedback.html" data-type="entity-link">AssociateFeedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssociateInput.html" data-type="entity-link">AssociateInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssociateInterviewCount.html" data-type="entity-link">AssociateInterviewCount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cohort.html" data-type="entity-link">Cohort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DayNotice.html" data-type="entity-link">DayNotice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feedback.html" data-type="entity-link">Feedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Interview.html" data-type="entity-link">Interview</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterviewClient.html" data-type="entity-link">InterviewClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterviewFeedback.html" data-type="entity-link">InterviewFeedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterviewFormat.html" data-type="entity-link">InterviewFormat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterviewStatus.html" data-type="entity-link">InterviewStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManagerFeedback.html" data-type="entity-link">ManagerFeedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SomeAssociate.html" data-type="entity-link">SomeAssociate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});