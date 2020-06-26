import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public students: Array<{ title: string; note: string　}> = [];
  public companys: Array<{ title: string; note: string　}> = [];
  public events_data: Array<{ title: string; }> = [];
  public input_data ={};
  constructor(public http: HttpClient) {
    this.students.push({
      title: '学生名 ' ,
      note: 'アンケート結果 表示イメージ:　A　B　C　D　E　F(社)',
    });
    for (let i = 1; i < 21; i++) {
      this.students.push({
        title: '学生 ' + i,
        note: '　○　◎　☓　◎　☓　○　 ',
      });
    }

    this.companys.push({
      title: '企業名 ' ,
      note: 'アンケート結果 表示イメージ:　1　2　3　4　5　6 ....(学生)',
    });
    for (let i = 1; i < 7; i++) {
      this.companys.push({
        title: '企業 ' + i,
        note: '　○　☓　☓　◎　☓　☓　○　◎　☓　◎　☓　○　○　◎　☓　◎　☓　○　 ',
      });
    }

    this.events_data.push(
      {title: '20210520 TS20 '},
      {title: '20210524 TS30 '},
      {title: '20210528 TS20 '},
      {title: '20210529 TS20 '}
    );
}

  //kintoneのアンケート結果を取得する
  check(){
    console.log(this.input_data.event_key)
    this.http.get('https://sokunaiapi.herokuapp.com/check_question/'+this.input_data.event_key).subscribe(data => {
    this.c_answer = data[0];
    this.s_answer  = data[1];
    this.c_name = data[2];
    this.s_name  = data[3];

    this.c_name.unshift("学生名")
  });
}

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
