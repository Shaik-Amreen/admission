import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration: FormGroup
  registrationstatus: any = false;
  optstatus: any = false
  errorStatus: any = false;
  otperror: any = ''
  buttonClicked:any=false
  constructor(private http: HttpClient, private route: Router) {
    this.buttonClicked=false
    sessionStorage.clear()
    let defaultmail: any = '', defaulthallticket: any = ''
    if (sessionStorage.getItem("otpmail")) {
      defaultmail = sessionStorage.getItem("otpmail")
      defaulthallticket = sessionStorage.getItem("hallticket")
    }
    sessionStorage.removeItem('role')
    this.registration = new FormGroup({
      'otpmail': new FormControl(defaultmail, [Validators.required, Validators.pattern('[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com')]),
      'hallticket': new FormControl(defaulthallticket, Validators.required),
      'otp': new FormControl(''),
      'gender': new FormControl(''),

    })
  }


   

  register() {
    if (this.registration.status == 'VALID') {
      this.buttonClicked=true
      this.http.post('http://localhost:4000/stdregister', this.registration.value).subscribe(
        (res: any) => {
          console.log(res)

          sessionStorage.setItem('token',"success")
          if (res.message == "success") { this.optstatus = true }
          else { this.route.navigate(['/submittedresponse']) }
        },
        err => console.log(err)
      )
    }
    else {
      this.errorStatus = true
    }
  }

  verifyopt() {
    if (this.registration.value.otp == '') {
      this.otperror = "please fill this field"
    }
    else {
      this.http.post('http://localhost:4000/verifyotp', this.registration.value).subscribe(
        (res: any) => {
          console.log(res)
          if (res.message == "success") {
            this.registrationstatus = true;
            sessionStorage.setItem('otpmail', this.registration.value.otpmail)
            sessionStorage.setItem('hallticket', this.registration.value.hallticket)
            this.route.navigate(['/admission'])
          }
          else {
            this.otperror = "please enter valid otp"
          }
        },
        err => console.log(err)
      )
    }
  }



  ngOnInit(): void {
  }

}
