export class Quote {
    upVote!: number;
    downVote!: number;
    showDetails!: boolean;
    constructor(public id:number, public quote:string, public author:string, public creationDate:Date){
        this.upVote = 0;
        this.downVote = 0;
        this.showDetails = false;
    }
}
