import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  temp: boolean = false; temp1: boolean = false;
  formgroupdata: any = FormGroup; formvalue = false; 

  mail = ''; otp = ''; generatedotp = ''; timeRemained = 120; invalidotp = false; mailerr = ''
  loginMode = true; logindata = false; errorMessage = ''; vepa: any = false;
  
  formdata: any[] =
    [
      { "label": "Email address", "formname": "mail", "value": "", "valid": true, "tags": "input", "type": "email", "placeholder": "Enter your mail", "icon": 'bx bxs-envelope', "icon1": "", "icon2": "",validations: [Validators.required, Validators.pattern("^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$")] },
      { "label": "Password", "formname": "password", "value": '', "valid": true, "tags": "input", "placeholder": "Enter your password", "type": "password", "icon": "bx bxs-lock", "icon1": "bx bxs-hide", "icon2": "bx bxs-show",validations: [Validators.required] }
    ]

  studentdata: any = []; type: any = '';role:any;adduser=false
  constructor(private http: HttpClient,private router: Router) {
    // this.http.post('http://localhost:4000/getadmin',{mail:sessionStorage.getItem("mail")}).subscribe(
    //   (res:any)=>{
    //     this.role=res.data
    //     console.log(this.role)
    //   }
    // )
    this.role=sessionStorage.getItem('role')
    let form: any = {}

    this.formdata.forEach((e: any) => {
      (e.valid) ? form[e.formname] = new FormControl(e.value, e.validations) :
        form[e.formname] = new FormControl(e.value)
      this.formgroupdata = new FormGroup(form)
    })
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

  addadmin(){
    this.formvalue = true;
    if (this.formgroupdata.status == 'VALID') {
      this.formgroupdata.value.mail=this.formgroupdata.value.mail.toLowerCase()
      this.http.post("http://localhost:4000/createadmin",{...this.formgroupdata.value,role:"admin",createdby:sessionStorage.getItem("mail")}).subscribe(
        (res:any)=>{
          if(res.message=="success"){
            this.adduser=false
          }
          else{
            this.errorMessage='User Exist';
          }
        }
      )
    }
  }
}
