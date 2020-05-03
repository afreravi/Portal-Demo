import { Injectable } from '@angular/core';
import { QUIZ} from "src/db-data"
import { quizList } from "src/app/models/constants"

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  quiz:quizList[] = QUIZ;
  rightAns: Array<string>
  constructor() { 
    this.rightAns = [ "All of the options", "S3cr3t@!)10", "Inform to ISMS department", "Password must never be shared", "I press ctrl + Alt + Del & click on lock or windows + L button combination", "When you know the sender, the attachment is expected, and it is not unusual in any way", "Delete the mail without opening it", "All of the options", "Wait until you can get to a private area before discussing the clients information", "'Spoofed' e-mails and fraudulent websites designed to fool recipients into divulging personal financial data such as credit card numbers, account usernames and passwords" ]  
  }
  
  

}
