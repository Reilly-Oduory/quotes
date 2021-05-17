export class Quote {
    // upVote!: number;
    //downVote!: number;
    showDetails!: boolean;
    constructor(public id:number, public quote:string, public author:string, public creationDate:Date, public upVote: number = 0, public downVote: number = 0){
        // this.upVote = 0;
        //this.downVote = 0;
        this.showDetails = false;
    }
}
