import { Injectable } from '@angular/core';
import { QUIZ} from "src/db-data"

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  quiz = QUIZ;
  
  constructor() { }
}
