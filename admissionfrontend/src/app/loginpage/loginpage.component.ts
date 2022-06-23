import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  temp: boolean = false; temp1: boolean = false;
  formgroupdata: any = FormGroup;
  formdata: any[] =
    [
      { "label": "Email address", "formname": "mail", "value": "", "valid": true, "tags": "input", "type": "email", "placeholder": "Enter your mail", "icon": 'bx bxs-envelope', "icon1": "", "icon2": "", validations: [Validators.required, Validators.pattern("^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$")] },
      { "label": "Password", "formname": "password", "value": '', "valid": true, "tags": "input", "placeholder": "Enter your password", "type": "password", "icon": "bx bxs-lock", "icon1": "bx bxs-hide", "icon2": "bx bxs-show", validations: [Validators.required] }
    ]
  mail = ''; otp = ''; generatedotp = ''; timeRemained = 120; invalidotp = false; mailerr = ''
  loginMode = true; logindata = false; errorMessage = ''; vepa: any = false;
  formvalue = false; signin = "SIGN IN"
  ngOnInit() {
    sessionStorage.removeItem('role')
  }

  constructor(private http: HttpClient, private router: Router) {
    sessionStorage.removeItem('mail')
    sessionStorage.removeItem("hallticket")
    let form: any = {}

    this.formdata.forEach((e: any) => {
      (e.valid) ? form[e.formname] = new FormControl(e.value, e.validations) :
        form[e.formname] = new FormControl(e.value)
      this.formgroupdata = new FormGroup(form)
    })
    // console.log(this.formgroupdata);

    // let myCompOneObj = new InputformsComponent();

    // console.log(myCompOneObj.submit())

  }

  checkOtp(f: NgForm) {
    (f.value.otp == this.generatedotp) ? (this.router.navigate(['/forgotpassword']), sessionStorage.setItem('mail', this.mail)) :
      this.invalidotp = true; f.reset()
  }

  //signin 
  signIn() {
    this.formvalue = true;
    if (this.formgroupdata.status == 'VALID') {
      this.signin = "SIGNING... IN"
      this.formgroupdata.value.mail = this.formgroupdata.value.mail.toLowerCase()
      this.http.post('http://localhost:4000/adminlogin', this.formgroupdata.value).subscribe(
        (res1: any) => {
          this.signin = "SIGN IN";
          console.log(res1);
          (res1.message) ? this.errorMessage = res1.message :
            (sessionStorage.setItem('mail', this.formgroupdata.value.mail), sessionStorage.setItem('token', res1.token), sessionStorage.setItem('role', res1.role));
          (res1.role == 'admin' || res1.role == 'superadmin') ? this.router.navigate(['/admin']) : null
        },
        (err: any) => console.log(err)
      )
    }
  }

  viewforgotpass: any = true
  changeMode() { this.mail = ''; this.viewforgotpass = !this.viewforgotpass }
  buttonMode = 'SEND OTP';

  forget(f: NgForm) {
    this.mailerr = ''; f.value.mail = f.value.mail.toLowerCase()
    this.buttonMode = 'SENDING'; this.invalidotp = false
    console.log("hellooo")
    this.http.post('http://localhost:4000/findValidMail', f.value).subscribe(
      (res: any) => {
        console.log(res, "forgot passwoprd")
        if (res.message !== "success") {
          this.mailerr = res.error; this.buttonMode = 'SEND OTP'; f.reset()
        }
        else {
          sessionStorage.setItem('mail', res.organisation_id);
          this.http.post('http://localhost:4000/forgotpassword', { mail: f.value.mail, organisation_id: res.organisation_id }).subscribe(
            (res1: any) => {
              if (res1.otp) {
                this.buttonMode = 'SENT'; this.generatedotp = res1.otp; this.timeRemained = 120; let time = setInterval(() => { this.timeRemained-- }, 1000)
                setTimeout(() => { this.generatedotp = ''; clearInterval(time); this.buttonMode = 'RESEND OTP' }, 120000)
              }
              else if (res1.error == 'error') { this.mailerr = 'INVALID MAIL'; this.buttonMode = 'SEND OTP'; f.reset() }
              else { this.mailerr = 'POOR CONNECTION'; this.buttonMode = 'SEND OTP'; }
            },
            (err: any) => { this.mailerr = 'POOR CONNECTION'; this.buttonMode = 'SEND OTP'; })
        }
      })
  }

}
