import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  //ここリストの中にリストが入る形に変更必要
  public company_result: Array<{ title: string; note: string }> = [];
  public student_result: Array<{ title: string; note: string }> = [];
  public input_data = {};
  constructor(public http: HttpClient) {
  }






  //APIにpostして結果を受け取る
  public makeMatching(){
    console.log(this.input_data.event_key)
    console.log(this.input_data.priority_c)
    this.http.get('https://sokunaiapi.herokuapp.com/optimization/'+this.input_data.event_key).subscribe(data => {

      this.term_name = ["企業/学生名","1ターム","2ターム","3ターム","4ターム","5ターム","6ターム"]
      this.satisfaction_result  = data[1];
      this.company_result  = data[2];
      this.student_result  = data[3];
      this.company_name = data[4];
      this.student_name = data[5];
      console.log(data[4]);

    });
  }

  //kintoneのマッチ結果を公開するためにkintoneの参加者に公開フラグを立てる
  public openkintone(){
    this.http.get('https://sokunaiapi.herokuapp.com/open/200802_TS30').subscribe(data => {
    });
  }


}
