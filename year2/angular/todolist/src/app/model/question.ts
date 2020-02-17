export class Question {
    public id: number;
    public question: string;
    public answers: Answer[] = [];
    public studentAnswer: string;
    public correct:number=1;// bu property telebenin bu suala duz cavab verib,
    // vermediyini teyin etmek ucundur,

}

export class Answer {

    constructor(public answer: string,
        public correct: boolean) {
        

    }
}