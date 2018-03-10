import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Question } from './question';

@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getAllQuestions(): Observable<Question[]> {

    try {
    // Api Full path like, http://localhost:4200/assets/service.json
      return this.http.get('src/questionset.json')
      .map(this.extractData)
      .catch(this.handleError);
    } catch (error) { console.log(error); }
  }

  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  handleError(error: any) {
    return Observable.throw(error);
  }
}