export class Survey {
    surveyId: number;
    title: string;
    description: string;
    dateCreated: Date;
    closingDate: Date;
    template: boolean;
    published: boolean;

    constructor(surveyId: number, title: string, description: string,
                dateCreated: Date, closingDate: Date, template: boolean, published: boolean) {
      this.surveyId = surveyId;
      this.title = title;
      this.description = description;
      this.dateCreated = dateCreated;
      this.closingDate = closingDate;
      this.template = template;
      this.published = published;
      }
  }
