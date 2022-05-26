import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  studentdata: any = []; type: any = ''
  constructor(private http: HttpClient) {

  }
  showData: any = false

  filterStudent() {
    this.http.post('http://localhost:4000/getstudent', { hallticket: this.type }).subscribe(
      (res: any) => { this.studentdata = res.data; this.showData = true },
      (err: any) => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
