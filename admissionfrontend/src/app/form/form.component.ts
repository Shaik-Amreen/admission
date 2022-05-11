import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formdata: any = [



    // { formname: "studentphoto",type:"text",tag:"input", required: true, label: "Passport size photo" },
    // { formname: "branchapplied",type:"text",tag:"input", required: true, label: "Branch" },


    {
      label: "", combine: true, content: [
        { formname: "fullname", type: "text", tag: "input", required: true, label: "Full Name of the Candidate (In capitals)" },
        { formname: "dob", type: "date", tag: "input", required: true, label: "Date of birth (DD/MM/YY)" },
        {
          formname: "gender", tag: "select", required: true, label: "Gender", options: [
            { value: "male", view: "Male" },
            { value: "female", view: "Female" },
            { value: "other", view: "Other" }
          ]
        },
        { formname: "fathername", type: "text", tag: "input", required: true, label: "Father's / Guardian name" },
        { formname: "mothername", type: "text", tag: "input", required: true, label: "Mother's name" },
        { formname: "aadharno", type: "number", tag: "input", required: true, label: "Aadhar number" },
      ]
    },

    // { formname: "middlename",type:"text",tag:"input", required: true, label: "Middle name" },
    // { formname: "second",type:"text",tag:"input", required: true, label: "" },
    // { formname: "rollno" },
    // { hallticket: { type: "string",type:"text",tag:"input", required: true, label: "Hall ticket number" } },
    // { formname: "rank",type:"text",tag:"input", required: true, label: "EAMCET/ ECET Rank" },
    // { checklist: [], combine: true },




    {
      label: "Present Address", combine: true,
      content: [
        { formname: 'houseno', label: "House No", required: true, type: "text", tag: "input" },
        { formname: 'street', label: "Street/Location", required: true, type: "text", tag: "input" },
        { formname: 'village', label: "Village/Mandal", required: true, type: "text", tag: "input" },
        { formname: 'state', label: "Dist./State", required: true, type: "text", tag: "input" },
        { formname: 'pin', label: "Pin", required: true, type: "number", tag: "input" },
      ]
    },
    {
      label: "Permanent Address", combine: true,
      content: [
        { formname: 'houseno', label: "House No", required: true, type: "text", tag: "input" },
        { formname: 'street', label: "Street/Location", required: true, type: "text", tag: "input" },
        { formname: 'village', label: "Village/Mandal", required: true, type: "text", tag: "input" },
        { formname: 'state', label: "Dist./State", required: true, type: "text", tag: "input" },
        { formname: 'pin', label: "Pin", required: true, type: "number", tag: "input" },
      ]
    },
    {
      label: "Personal Details", combine: true,
      content: [
        { formname: "fathermobile", type: "number", tag: "input", required: true, label: "Father's mobile number" },
        { formname: "mothermobile", label: "Mother's mobile number", type: "number", tag: "input" },
        { formname: "parentmail", label: "Parent's mail", type: "text", tag: "input" },
        { formname: "studentmail", type: "text", tag: "input", required: true, label: "Candidate's mail" },
        { formname: "studentmobile", label: "Candidate's mobile", type: "number", tag: "input" },
        { formname: "studentblood", type: "text", tag: "input", required: true, label: "Blood group" },
        { formname: "nationality", type: "text", tag: "input", required: true, label: "Nationality" },
        { formname: "religion", type: "text", tag: "input", required: true, label: "Religion" },
        { formname: "caste", type: "text", tag: "input", required: true, label: "Caste" },
        { formname: "category", type: "text", tag: "input", required: true, label: "Category" },
      ]
    },


    {
      combine: true, label: "Details of Educational Qualifications", content: [
        {
          label: "SSC", formname: "ssc", content: [
            { formname: "schoolorcollegename", label: "School / College Name", required: true, type: "text", tag: "input" },
            { formname: "grouporbranch", label: "Group / Branch", required: true, type: "text", tag: "input" },
            { formname: "yearofpassing", label: "Year of passing", required: true, type: "number", tag: "input" },
            { formname: "boardoruniversity", label: "Board / University", required: true, type: "text", tag: "input" },
            { formname: "grade", label: "Division / Grade % of Marks", tag: "input", type: "number", required: true }
          ], combine: true
        },
        {
          label: "Inter", formname: "inter", content: [
            { formname: "schoolorcollegename", label: "School / College Name", required: true, type: "text", tag: "input" },
            { formname: "grouporbranch", label: "Group / Branch", required: true, type: "text", tag: "input" },
            { formname: "yearofpassing", label: "Year of passing", required: true, type: "number", tag: "input" },
            { formname: "boardoruniversity", label: "Board / University", required: true, type: "text", tag: "input" },
            { formname: "grade", label: "Division / Grade % of Marks", tag: "input", type: "number", required: true }
          ], combine: true
        },
        {
          label: "UG", formname: "ug", content: [
            { formname: "schoolorcollegename", label: "School / College Name", type: "text", tag: "input" },
            { formname: "grouporbranch", label: "Group / Branch", type: "text", tag: "input" },
            { formname: "yearofpassing", label: "Year of passing", type: "number", tag: "input" },
            { formname: "boardoruniversity", label: "Board / University", type: "text", tag: "input" },
            { formname: "grade", label: "Division / Grade % of Marks", type: "number", tag: "input" }
          ], combine: true
        },
        {
          label: "PG", formname: "pg", content: [
            { formname: "schoolorcollegename", label: "School / College Name", type: "text", tag: "input" },
            { formname: "grouporbranch", label: "Group / Branch", type: "text", tag: "input" },
            { formname: "yearofpassing", label: "Year of passing", type: "number", tag: "input" },
            { formname: "boardoruniversity", label: "Board / University", type: "text", tag: "input" },
            { formname: "grade", label: "Division / Grade % of Marks", type: "number", tag: "input" }
          ], combine: true
        },
        {
          label: "Any Other", formname: "other", content: [
            { formname: "schoolorcollegename", label: "School / College Name", type: "text", tag: "input" },
            { formname: "grouporbranch", label: "Group / Branch", type: "text", tag: "input" },
            { formname: "yearofpassing", label: "Year of passing", type: "number", tag: "input" },
            { formname: "boardoruniversity", label: "Board / University", type: "text", tag: "input" },
            { formname: "grade", label: "Division / Grade % of Marks", type: "number", tag: "input" }
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
          formname: "appeared", label: "Appeared", required: true, tag: "select", options: [
            { value: "yes", view: "Yes" },
            { value: "no", view: "No" },
          ]
        },
        { formname: "year", label: "Year", required: true, type: "text", tag: "input" },
        { formname: "hallticket", type: "text", tag: "input", required: true, label: "Hall ticket number" },
        { formname: "rank", type: "text", tag: "input", required: true, label: "Rank" },
      ]
    },
    { formname: "fatheroccupation", label: "Occupation of the Father / Guardian  ", required: true, type: "text", tag: "input" },
    { formname: "fatherannualincome", label: "Annual Income of the Father / Guardian  ", required: true }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
