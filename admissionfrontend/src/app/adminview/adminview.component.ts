import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

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
      { "label": "Email address", "formname": "mail", "value": "", "valid": true, "tags": "input", "type": "email", "placeholder": "Enter your mail", "icon": 'bx bxs-envelope', "icon1": "", "icon2": "", validations: [Validators.required, Validators.pattern("^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$")] },
      { "label": "Password", "formname": "password", "value": '', "valid": true, "tags": "input", "placeholder": "Enter your password", "type": "password", "icon": "bx bxs-lock", "icon1": "bx bxs-hide", "icon2": "bx bxs-show", validations: [Validators.required] }
    ]

  studentdata: any = []; type: any = ''; role: any; adduser = false; registrations: any
  reglen: any = 0; adminmails: any = []
  constructor(private http: HttpClient, private router: Router) {
    this.http.post('http://localhost:4000/registrations', {}).subscribe((res: any) => {
      console.log(res, "res")
      this.registrations = res.registrations
      this.reglen = res.registrations.length
    })

    this.http.post('http://localhost:4000/getadmin', { mail: sessionStorage.getItem("mail") }).subscribe(
      (res: any) => {
        this.role = res.data
        this.http.post("http://localhost:4000/getadmins", '').subscribe(
          (s: any) => {
            this.adminmails = s.data
          })
      }
    )
    this.role = sessionStorage.getItem('role')
    // if (this.role == 'superadmin' || this.role == 'admin') { }
    // else { this.router.navigate(['/login']) }
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

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, { raw: true });

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Applicants list.xlsx');

  }


  logout() {
    sessionStorage.removeItem('role')
    this.router.navigate(['/login'])
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
        sessionStorage.setItem('hallticket', this.type)
        this.studentdata = res.data; this.showData = true;
      },
      (err: any) => console.log(err)
    )
  }

  ngOnInit(): void {
  }


  // exportToExcel() {
  //   let dataForExcel: any = []
  //   this.registrations.forEach((row: any, i: any) => {
  //     dataForExcel.push([
  //       row.aadharno,
  //       row.academicyear,
  //       row.appeared,
  //       row.branchapplied,
  //       row.caste,
  //       row.category,
  //       row.course,
  //       row.dob,
  //       row.entranceexam,
  //       row.fatherannualincome,
  //       row.fathermobile,
  //       row.fathername,
  //       row.fatheroccupation,
  //       row.fullname,
  //       row.fatherdob,
  //       row.gender,
  //       row.hallticket,
  //       row.interboardoruniversity,
  //       row.intergrade,
  //       row.intergrouporbranch,
  //       row.interschoolorcollegename,
  //       row.interyearofpassing,
  //       row.lateralentry,
  //       row.mothermobile,
  //       row.mothername,
  //       row.nationality,
  //       row.otherboardoruniversity,
  //       row.othergrade,
  //       row.othergrouporbranch,
  //       row.otherschoolorcollegename,
  //       row.otheryearofpassing,
  //       row.otpmail,
  //       row.otp,
  //       row.parentmail,
  //       row.permanenthouseno,
  //       row.permanentpin,
  //       row.permanentstate,
  //       row.permanentstreet,
  //       row.permanentvillage,
  //       row.pgboardoruniversity,
  //       row.pggrade,
  //       row.pggrouporbranch,
  //       row.pgschoolorcollegename,
  //       row.pgyearofpassing,
  //       row.presenthouseno,
  //       row.presentpin,
  //       row.presentstate,
  //       row.presentstreet,
  //       row.presentvillage,
  //       row.quota,
  //       row.rank,
  //       row.religion,
  //       row.rollno,
  //       row.schoolorcollegename,
  //       row.sscboardoruniversity,
  //       row.sscgrade,
  //       row.sscgrouporbranch,
  //       row.sscyearofpassing,
  //       row.studentblood,
  //       row.studentmail,
  //       row.studentmobile,
  //       row.studentphoto,
  //       row.ugboardoruniversity,
  //       row.uggrade,
  //       row.uggrouporbranch,
  //       row.ugschoolorcollegename,
  //       row.ugyearofpassing,
  //       row.year,
  //       row.approvedby,
  //       row.fatherdob,
  //     ])
  //   })
  //   let reportData = {
  //     title: 'Admissions',
  //     data: dataForExcel,
  //     headers: [
  //       "Aadhar number",
  //       "Academic year",
  //       "appeared",
  //       "Branch applied",
  //       "caste",
  //       "category",
  //       "course",
  //       "dob",
  //       "entranceexam",
  //       "fatherannualincome",
  //       "fathermobile",
  //       "fathername",
  //       "fatheroccupation",
  //       "fullname",
  //       "fatherdob",
  //       "gender",
  //       "hallticket",
  //       "interboardoruniversity",
  //       "intergrade",
  //       "intergrouporbranch",
  //       "interschoolorcollegename",
  //       "interyearofpassing",
  //       "lateralentry",
  //       "mothermobile",
  //       "mothername",
  //       "nationality",
  //       "otherboardoruniversity",
  //       "othergrade",
  //       "othergrouporbranch",
  //       "otherschoolorcollegename",
  //       "otheryearofpassing",
  //       "otpmail",
  //       "otp",
  //       "parentmail",
  //       "permanenthouseno",
  //       "permanentpin",
  //       "permanentstate",
  //       "permanentstreet",
  //       "permanentvillage",
  //       "pgboardoruniversity",
  //       "pggrade",
  //       "pggrouporbranch",
  //       "pgschoolorcollegename",
  //       "pgyearofpassing",
  //       "presenthouseno",
  //       "presentpin",
  //       "presentstate",
  //       "presentstreet",
  //       "presentvillage",
  //       "quota",
  //       "rank",
  //       "religion",
  //       "rollno",
  //       "schoolorcollegename",
  //       "sscboardoruniversity",
  //       "sscgrade",
  //       "sscgrouporbranch",
  //       "sscyearofpassing",
  //       "studentblood",
  //       "studentmail",
  //       "studentmobile",
  //       "studentphoto",
  //       "ugboardoruniversity",
  //       "uggrade",
  //       "uggrouporbranch",
  //       "ugschoolorcollegename",
  //       "ugyearofpassing",
  //       "year",
  //       "approvedby",

  //     ],
  //     backAlpha: 'I3'
  //   }

  //   this.ete.exportExcel(reportData);
  // }

  addadmin() {
    this.formvalue = true;
    if (this.formgroupdata.status == 'VALID') {
      this.formgroupdata.value.mail = this.formgroupdata.value.mail.toLowerCase()
      this.http.post("http://localhost:4000/createadmin", { ...this.formgroupdata.value, role: "admin", createdby: sessionStorage.getItem("mail") }).subscribe(
        (res: any) => {
          if (res.message == "success") {
            this.adduser = false
          }
          else {
            this.errorMessage = 'User Exist';
          }
        }
      )
    }
  }
}
