import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/shared/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionArray : Array<Question>= new Array;
  question: Question=new Question() 

  constructor(private quesService:QuestionService) { }

  ngOnInit(): void {
    this.quesService.getQuestion().subscribe(
      action =>{
        
        action.forEach(
          action =>{
           //this.adminArray.push(this.admin);
           this.question= new Question();
     
            this.question.nom = action.payload.child('nom').val();
            this.questionArray.push(this.question);
            
            
          }
        )
        
      }
   )

  }

}
