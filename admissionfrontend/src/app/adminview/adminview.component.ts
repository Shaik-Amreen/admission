import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  studentdata: any = []; type: any = '';role:any
  constructor(private http: HttpClient) {
    this.http.post('http://localhost:4000/getadmin',{mail:sessionStorage.getItem("mail")}).subscribe(
      (res:any)=>{
        this.role=res.role
      }
    )
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
