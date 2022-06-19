import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  errorstatus: any = false
  formdata: any = [

    {
      combine: true, content: [
        { formname: "fullname", type: "text", tag: "input",placeholder : "Enter Your Full Name As per SSC", required: true, validations: [Validators.required], label: "Full Name Of The Candidate (In capitals)" },


        { formname: "academicyear", type: "number", tag: "input",placeholder : "Year Of Joining", required: true, validations: [Validators.required, Validators.min(2020)], label: "Academic Year" },


        {
          formname: "category", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Category", options: [
            { value: "a", view: "A" },
            { value: "b", view: "B" },
          ]
        },
        {
          formname: "course", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Admission Into", options: [
            { value: "btech", view: "B.Tech" },
            { value: "mtech", view: "M.Tech" },
            { value: "mba", view: "MBA" },
            { value: "mca", view: "MCA" },
          ]
        },

        {
          formname: "quota", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Quota", options: [
            { value: "conveynor", view: "Conveynor" },
            { value: "management", view: "Management" },
          ]
        },
        {
          formname: "lateralentry", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Lateral Entry", options: [
            { value: "yes", view: "Yes" },
            { value: "no", view: "No" },
          ]
        },
        { formname: "branchapplied", type: "text", tag: "input",placeholder : "Branch You Applied For", required: true, validations: [Validators.required], label: "Branch Applied For" },



        { formname: "dob", type: "date", tag: "input",placeholder : "Month/Day/Year", required: true, validations: [Validators.required], label: "Date of Birth (MM/DD/YY)" },
        {
          formname: "gender", tag: "select", required: true, validations: [Validators.required], label: "Gender", options: [
            { value: "male", view: "Male" },
            { value: "female", view: "Female" },
            { value: "other", view: "Other" }
          ]
        },
        { formname: "fathername", type: "text", tag: "input",placeholder : "Enter Your Father's / Guardian Name As Per SSC", required: true, validations: [Validators.required], label: "Father's / Guardian Name" },
        { formname: "mothername", type: "text", tag: "input",placeholder : "Enter Your Mother's Name As per SSC", required: true, validations: [Validators.required], label: "Mother's Name" },
        { formname: "aadharno", type: "number", tag: "input",placeholder : "Enter Your Aadhar Number", required: true, validations: [Validators.required], label: "Aadhar Number" },
      ]
    },

    // { formname: "middlename",type:"text",tag:"input", required: true, validations:[Validators.required],label: "Middle name" },
    // { formname: "second",type:"text",tag:"input", required: true, validations:[Validators.required],label: "" },

    // { hallticket: { type: "string",type:"text",tag:"input", required: true, validations:[Validators.required],label: "Hall ticket number" } },
    // { formname: "rank",type:"text",tag:"input", required: true, validations:[Validators.required],label: "EAMCET/ ECET Rank" },
    // { checklist: [], combine: true },




    {
      label: "Present Address", combine: true,
      content: [
        { formname: 'presenthouseno', label: "House No", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter house number ex: 2-6/768" },
        { formname: 'presentstreet', label: "Street/Location", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter Street Name and Nearest Location " },
        { formname: 'presentvillage', label: "Village/Mandal Or Town", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter Village Name And Mandal Name Or Town" },
        { formname: 'presentstate', label: "Dist./State", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter District Name and The State" },
        { formname: 'presentpin', label: "Pincode", required: true, validations: [Validators.required], type: "number", tag: "input" , placeholder:"Enter Pincode" },
      ]
    },
    {
      label: "Permanent Address", combine: true,
      content:  [
        { formname: 'presenthouseno', label: "House No", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter house number ex: 2-6/768" },
        { formname: 'presentstreet', label: "Street/Location", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter Street Name and Nearest Location " },
        { formname: 'presentvillage', label: "Village/Mandal Or Town", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter Village Name And Mandal Name Or Town" },
        { formname: 'presentstate', label: "Dist./State", required: true, validations: [Validators.required], type: "text", tag: "input" , placeholder:"Enter District Name and The State" },
        { formname: 'presentpin', label: "Pincode", required: true, validations: [Validators.required], type: "number", tag: "input" , placeholder:"Enter Pincode" },
      ]
    },
    {
      label: "Personal Details", combine: true,
      content: [
        { formname: "fathermobile", type: "number", tag: "input" , placeholder:"Enter Your Father's Mobile Number", required: true, validations: [Validators.required], label: "Father's Mobile Number" },
        { formname: "mothermobile", label: "Mother's Mobile Number", type: "number", tag: "input" , placeholder:"Enter Your Mother's Mobile Number" },
        { formname: "parentmail", label: "Parent's Mail Id", type: "text", tag: "input" , placeholder:"Enter Your Parent's MailId",validations: [Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")] },
        { formname: "studentmail", type: "text", tag: "input" , placeholder:"Enter Your Mail Id", required: true, label: "Candidate's mail", validations: [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")] },
        { formname: "studentmobile", label: "Candidate's Mobile", type: "number", tag: "input" , placeholder:"Enter Your Mobile Number" },
        { formname: "studentblood", type: "text", tag: "input",placeholder : "Enter Your Blood Group", required: true, validations: [Validators.required], label: "Blood Group" },
        { formname: "nationality", type: "text", tag: "input",placeholder : "Enter Your Nationality", required: true, validations: [Validators.required], label: "Nationality" },
        { formname: "religion", type: "text", tag: "input",placeholder : "Enter Your Religion", required: true, validations: [Validators.required], label: "Religion" },
        { formname: "caste", type: "text", tag: "input",placeholder : "Enter Your Caste ", required: true, validations: [Validators.required], label: "Caste" },
        { formname: "category", type: "text", tag: "input",placeholder : "Enter Your Category", required: true, validations: [Validators.required], label: "Category" },
      ]
    },
    {
      combine: true, label: "Details of Educational Qualifications", content: [
        {
          label: "SSC", content: [
            { formname: "schoolorcollegename", label: "School / College Name", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your School Name'},
            // { formname: "sscgrouporbranch", label: "Group / Branch", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your'},
            { formname: "sscyearofpassing", label: "Year Of Passing", required: true, validations: [Validators.required], type: "number", tag: "input",placeholder:'Enter Your Passed Out Year'},
            { formname: "sscboardoruniversity", label: "Board / University", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your Study Of Board'},
            { formname: "sscgrade", label: "Division / Grade % Of Marks", tag: "input",placeholder : "Enter Your Score Or Percentage", type: "number", required: true }
          ], combine: true
        },
        {
          label: "Inter", content: [
            { formname: "interschoolorcollegename", label: "School / College Name", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your College Name'},
            { formname: "intergrouporbranch", label: "Group / Branch", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your Group Of Study'},
            { formname: "interyearofpassing", label: "Year Of Passing", required: true, validations: [Validators.required], type: "number", tag: "input",placeholder:'Enter Your Passed Out Year'},
            { formname: "interboardoruniversity", label: "Board / University", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your Study Of Board'},
            { formname: "intergrade", label: "Division / Grade % Of Marks", tag: "input",placeholder : "Enter Your Score Or Percentage", type: "number", required: true }
          ], combine: true
        },
        {
          label: "UG", content: [
            { formname: "ugschoolorcollegename", label: "University / College Name", type: "text", tag: "input",placeholder:'Enter Your College Name' },
            { formname: "uggrouporbranch", label: "Specialisation / Branch", type: "text", tag: "input" ,placeholder:'Enter Your Branch Of Study Or Specialisation'},
            { formname: "ugyearofpassing", label: "Year Of Passing", type: "number", tag: "input" ,placeholder:'Enter Your Passed Out Year'},
            { formname: "ugboardoruniversity", label: "Board / University", type: "text", tag: "input",placeholder:'Enter Your Study Of Board Or University' },
            { formname: "uggrade", label: "Division / Grade % Of Marks",placeholder : "Enter Your Score Or Percentage", type: "number", tag: "input" }
          ], combine: true
        },
        {
          label: "PG", content: [
            { formname: "pgschoolorcollegename", label: "University / College Name", type: "text", tag: "input" ,placeholder:'Enter Your College Or University Name'},
            { formname: "pggrouporbranch", label: "Specialisation / Branch", type: "text", tag: "input",placeholder:'Enter Your Branch Of Study Or Specialisation' },
            { formname: "pgyearofpassing", label: "Year Of Passing", type: "number", tag: "input",placeholder:'Enter Your Passed Out Year'},
            { formname: "pgboardoruniversity", label: "Board / University", type: "text", tag: "input",placeholder:'Enter Your Study Of Board Or University'  },
            { formname: "pggrade", label: "Division / Grade % Of Marks", type: "number", tag: "input",placeholder : "Enter Your Score Or Percentage" }
          ], combine: true
        },
        {
          label: "Any Other", content: [
            { formname: "otherschoolorcollegename", label: "University / College Name", type: "text", tag: "input",placeholder:'Enter Your College Or University Name' },
            { formname: "othergrouporbranch", label: "Specialisation / Branch", type: "text", tag: "input",placeholder:'Enter Your Branch Of Study Or Specialisation' },
            { formname: "otheryearofpassing", label: "Year Of Passing", type: "number", tag: "input",placeholder:'Enter Your Passed Out Year' },
            { formname: "otherboardoruniversity", label: "Board / University", type: "text", tag: "input" ,placeholder:'Enter Your Study Of Board Or University'},
            { formname: "othergrade", label: "Division / Grade % Of Marks", type: "number", tag: "input",placeholder : "Enter Your Score Or Percentage" }
          ], combine: true
        },

      ]
    },
    {
      label: "Details of Qualifying Entrance Examinations", combine: true, content: [
        {
          formname: "entranceexam", label: "Entrance Exam", required: true,validations: [Validators.required], tag: "select", options: [
            { value: "eamcet", view: "EAMCET" },
            { value: "icet", view: "ICET" },
            { value: "other", view: "Other" }
          ]
        },
        {
          formname: "appeared", label: "Appeared", required: true, validations: [Validators.required], tag: "select", options: [
            { value: "yes", view: "Yes" },
            { value: "no", view: "No" },
          ]
        },
        { formname: "year", label: "Year", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Year Of Entrance Exam Attended' },
        { formname: "rank", type: "text", tag: "input",placeholder : "Enter Your Rank scored", required: true, validations: [Validators.required], label: "Rank" },
      ]
    },

    { formname: "rollno", label: "Roll Number",tag: "input",placeholder : "Enter College Roll Number, If Issued" },
    { formname: "fatherdob", label: "Father Date Of Birth (MM/DD/YY)",type: "date", tag: "input",placeholder :'Enter Your Father Date Of Birth' },
    { formname: "fatheroccupation", label: "Occupation Of The Father / Guardian  ", required: true, validations: [Validators.required], type: "text", tag: "input",placeholder:'Enter Your Occupation Of The Father / Guardian' },
    { formname: "fatherannualincome", label: "Annual Income Of The Father / Guardian  ", required: true, validations: [Validators.required], type: "number",placeholder:'Enter Your Annual Income Of The Father / Guardian ' }

  ]

  admissionform: any = FormGroup
  constructor(private http: HttpClient, private route: Router) {
    let admissiondata: any = {}
    this.formdata.forEach((c: any) => {
      if (c.combine) {
        c.content.forEach((d: any) => {
          if (d.combine) {
            d.content.forEach((e: any) => {
              admissiondata[e.formname] = new FormControl('', e.validations)
            })
          }
          else {
            admissiondata[d.formname] = new FormControl('', d.validations)
          }
        })
      }
      else {
        admissiondata[c.formname] = new FormControl('', c.validations)
      }
    });

    admissiondata.allotmentorder = new FormControl(false)
    admissiondata.joiningreport = new FormControl(false)
    admissiondata.recieptofcert = new FormControl(false)
    admissiondata.hallticketcert = new FormControl(false)
    admissiondata.rankcard = new FormControl(false)
    admissiondata.sscmarksmemo = new FormControl(false)
    admissiondata.sixtencert = new FormControl(false)
    admissiondata.parentphoto = new FormControl(false)

    admissiondata.intermarksmemo = new FormControl(false)
    admissiondata.intercert = new FormControl(false)
    admissiondata.ugpc = new FormControl(false)
    admissiondata.ugcert = new FormControl(false)
    admissiondata.photos = new FormControl(false)
    admissiondata.aadharcard = new FormControl(false)
    admissiondata.othercert = new FormControl(false)

    this.admissionform = new FormGroup(admissiondata)
  }

  // base64Output: string = '';

  // onFileSelected(event: any) {
  //   this.convertFile(event.target.files[0]).subscribe((base64: any) => {
  //     this.base64Output = base64;
  //     this.admissionform.controls["studentphoto"].setValue(this.base64Output)
  //   });
  // }

  // convertFile(file: File): Observable<string> {
  //   const result = new ReplaySubject<string>(1);
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(file);
  //   reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
  //   return result;
  // }

  submit() {

    if (this.admissionform.status == 'VALID') {
      this.admissionform.value.hallticket = sessionStorage.getItem('hallticket')
      this.admissionform.value.otpmail = sessionStorage.getItem('otpmail')
      this.http.post('http://localhost:4000/stdregistersubmit', this.admissionform.value).subscribe(
        res => {
          this.route.navigate(['/submittedresponse'])
        },
        err => console.log(err)
      )
    }
    else {
      this.errorstatus = true
      const firstElementWithError = document.querySelector('.ng-invalid');
      if (firstElementWithError) {
        firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      let a = ''
      Object.keys(this.admissionform.value).forEach(control => {
        const controlErrors = this.admissionform.controls[control].errors;
        if (controlErrors != null && a == '') {
          a = control
          // console.log("control", a)
          document.getElementById(control)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
