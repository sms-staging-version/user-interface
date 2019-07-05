
export class Answer {
    id: number;
    answer: string;
    questionId: number;

    constructor(id: number, answer: string, questionId: number) {
        this.id = id;
        this.answer = answer;
        this.questionId = questionId;
      }

  }
