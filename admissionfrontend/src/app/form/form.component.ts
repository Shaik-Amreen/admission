import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formdata: any = [




    {
      combine: true, content: [
        { formname: "fullname", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Full Name of the Candidate (In capitals)" },

        { formname: "studentphoto", type: "file", tag: "input", required: true, validations: [Validators.required], label: "Passport size photo" },
        { formname: "academicyear", type: "text", tag: "input", required: true, validations: [Validators.required, Validators.min(2020)], label: "Academic year" },


        {
          formname: "category", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Category", options: [
            { value: "a", view: "A" },
            { value: "b", view: "B" },
          ]
        },
        {
          formname: "course", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Admission into", options: [
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
          formname: "lateralentry", type: "text", tag: "select", required: true, validations: [Validators.required], label: "Lateral entry", options: [
            { value: "yes", view: "Yes" },
            { value: "no", view: "No" },
          ]
        },
        { formname: "branchapplied", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Branch Applied For" },



        { formname: "dob", type: "date", tag: "input", required: true, validations: [Validators.required], label: "Date of birth (DD/MM/YY)" },
        {
          formname: "gender", tag: "select", required: true, validations: [Validators.required], label: "Gender", options: [
            { value: "male", view: "Male" },
            { value: "female", view: "Female" },
            { value: "other", view: "Other" }
          ]
        },
        { formname: "fathername", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Father's / Guardian name" },
        { formname: "mothername", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Mother's name" },
        { formname: "aadharno", type: "number", tag: "input", required: true, validations: [Validators.required], label: "Aadhar number" },
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
        { formname: 'presenthouseno', label: "House No", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'presentstreet', label: "Street/Location", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'presentvillage', label: "Village/Mandal", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'presentstate', label: "Dist./State", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'presentpin', label: "Pin", required: true, validations: [Validators.required], type: "number", tag: "input" },
      ]
    },
    {
      label: "Permanent Address", combine: true,
      content: [
        { formname: 'permanenthouseno', label: "House No", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'permanentstreet', label: "Street/Location", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'permanentvillage', label: "Village/Mandal", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'permanentstate', label: "Dist./State", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: 'permanentpin', label: "Pin", required: true, validations: [Validators.required], type: "number", tag: "input" },
      ]
    },
    {
      label: "Personal Details", combine: true,
      content: [
        { formname: "fathermobile", type: "number", tag: "input", required: true, validations: [Validators.required], label: "Father's mobile number" },
        { formname: "mothermobile", label: "Mother's mobile number", type: "number", tag: "input" },
        { formname: "parentmail", label: "Parent's mail", type: "text", tag: "input" },
        { formname: "studentmail", type: "text", tag: "input", required: true, label: "Candidate's mail", validations: [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")] },
        { formname: "studentmobile", label: "Candidate's mobile", type: "number", tag: "input" },
        { formname: "studentblood", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Blood group" },
        { formname: "nationality", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Nationality" },
        { formname: "religion", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Religion" },
        { formname: "caste", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Caste" },
        { formname: "category", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Category" },
      ]
    },
    {
      combine: true, label: "Details of Educational Qualifications", content: [
        {
          label: "SSC",  content: [
            { formname: "schoolorcollegename", label: "School / College Name", required: true, validations: [Validators.required], type: "text", tag: "input" },
            { formname: "sscgrouporbranch", label: "Group / Branch", required: true, validations: [Validators.required], type: "text", tag: "input" },
            { formname: "sscyearofpassing", label: "Year of passing", required: true, validations: [Validators.required], type: "number", tag: "input" },
            { formname: "sscboardoruniversity", label: "Board / University", required: true, validations: [Validators.required], type: "text", tag: "input" },
            { formname: "sscgrade", label: "Division / Grade % of Marks", tag: "input", type: "number", required: true }
          ], combine: true
        },
        {
          label: "Inter", content: [
            { formname: "interschoolorcollegename", label: "School / College Name", required: true, validations: [Validators.required], type: "text", tag: "input" },
            { formname: "intergrouporbranch", label: "Group / Branch", required: true, validations: [Validators.required], type: "text", tag: "input" },
            { formname: "interyearofpassing", label: "Year of passing", required: true, validations: [Validators.required], type: "number", tag: "input" },
            { formname: "interboardoruniversity", label: "Board / University", required: true, validations: [Validators.required], type: "text", tag: "input" },
            { formname: "intergrade", label: "Division / Grade % of Marks", tag: "input", type: "number", required: true }
          ], combine: true
        },
        {
          label: "UG",  content: [
            { formname: "ugschoolorcollegename", label: "School / College Name", type: "text", tag: "input" },
            { formname: "uggrouporbranch", label: "Group / Branch", type: "text", tag: "input" },
            { formname: "ugyearofpassing", label: "Year of passing", type: "number", tag: "input" },
            { formname: "ugboardoruniversity", label: "Board / University", type: "text", tag: "input" },
            { formname: "uggrade", label: "Division / Grade % of Marks", type: "number", tag: "input" }
          ], combine: true
        },
        {
          label: "PG",content: [
            { formname: "pgschoolorcollegename", label: "School / College Name", type: "text", tag: "input" },
            { formname: "pggrouporbranch", label: "Group / Branch", type: "text", tag: "input" },
            { formname: "pgyearofpassing", label: "Year of passing", type: "number", tag: "input" },
            { formname: "pgboardoruniversity", label: "Board / University", type: "text", tag: "input" },
            { formname: "pggrade", label: "Division / Grade % of Marks", type: "number", tag: "input" }
          ], combine: true
        },
        {
          label: "Any Other", content: [
            { formname: "otherschoolorcollegename", label: "School / College Name", type: "text", tag: "input" },
            { formname: "othergrouporbranch", label: "Group / Branch", type: "text", tag: "input" },
            { formname: "otheryearofpassing", label: "Year of passing", type: "number", tag: "input" },
            { formname: "otherboardoruniversity", label: "Board / University", type: "text", tag: "input" },
            { formname: "othergrade", label: "Division / Grade % of Marks", type: "number", tag: "input" }
          ], combine: true
        },

      ]
    },
    {
      label: "Details of Qualifying Entrance Examinations", combine: true, content: [
        {
          formname: "entranceexam", label: "Entrance exam", tag: "select", options: [
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
        { formname: "year", label: "Year", required: true, validations: [Validators.required], type: "text", tag: "input" },
        { formname: "hallticket", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Hall ticket number" },
        { formname: "rank", type: "text", tag: "input", required: true, validations: [Validators.required], label: "Rank" },
      ]
    },

    { formname: "rollno", label: "Roll number" },
    { formname: "fatheroccupation", label: "Occupation of the Father / Guardian  ", required: true, validations: [Validators.required], type: "text", tag: "input" },
    { formname: "fatherannualincome", label: "Annual Income of the Father / Guardian  ", required: true }

  ]

  admissionform: FormGroup
  constructor() {
    let admissiondata: any = {}
    this.formdata.forEach((c: any) => {
      if (c.combine) {
        c.content.forEach((d: any) => {
          admissiondata[d.formname] = new FormControl('', d.validations)
          if (d.combine) {
            d.content.forEach((e: any) => {
              admissiondata[e.formname] = new FormControl('', e.validations)
            })
          }
        })
      }
      else {
        admissiondata[c.formname] = new FormControl('', c.validations)
      }
    });

    this.admissionform = new FormGroup(admissiondata)
    console.log(this.admissionform.value)
  }

  ngOnInit(): void {
  }

}
