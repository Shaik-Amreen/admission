import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  studentdata: any = []; type: any = ''
  constructor(private http: HttpClient, private router: Router) {

  }

  display: any = 'none'

  @ViewChild('report')
  report!: ElementRef;
  viewTop: any = true

  openModal() {
    this.viewTop = false;
    this.display = "block";
  }

  async downloadPDF() {
    // alert("Are you sure to print !")
    window.print()
  }


  printpage() {
    window.print()
  }

  edit() {
    sessionStorage.setItem('hallticket', this.studentdata[0].hallticket)
    this.router.navigate(['/edit'])
  }

  showData: any = false

  filterStudent() {
    this.http.post('http://localhost:4000/getstudent', { hallticket: this.type }).subscribe(
      (res: any) => {
        this.studentdata = res.data; this.showData = true;
      },
      (err: any) => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
