import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'YOLO','Reilly',new Date()),
    new Quote(2,'Bibi ya wenyewe is no go zone','Sauti Sol',new Date())
  ];

  likeQuote(index:number){
    this.quotes[index].upVote = this.quotes[index].upVote + 1;
  }
  dislikeQuote(index:number){
    this.quotes[index].downVote = this.quotes[index].downVote + 1;
  }

  toggle(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
