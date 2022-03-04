import {NgForm} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
/*import {Login, User, UserControllerService} from "../../../swagger-api";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {AuthControllerService} from "../../../swagger-api/api/authController.service";
import {setToken} from "../../helper/util";*/

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {
  }
  /*
  @ViewChild('loginForm') loginForm: NgForm | any;
  @ViewChild('signUpForm') signUpForm: NgForm | any;
  public panelClass = 'container';
/!*  username: string = "";
  usernameForSignup: string = "";
  password: string = "";
  passwordForSignup: string = "";
  name: string = "";*!/


  constructor(private userControllerService: UserControllerService,
              private authControllerService: AuthControllerService, private route: Router) {
  }



  rightPanelActive() {
    this.panelClass = 'container right-panel-active';
  }

  leftPanelActive() {
    this.panelClass = 'container';
  }

  logIn() {
    let data: Login = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password1.value
    }
    this.authControllerService.login(data).subscribe(response => {
      if (response.code === 200) {
        setToken('Bearer '+response.data)
        this.route.navigate(["/admin/home-admin"])
      } else {
        Swal.fire("Hata", "Kullanıcı adı veya şifre hatalı!", "error");
      }
    })
  }

  signUp() {
    let data: User = {
      username: this.signUpForm.controls.username1.value,
      password: this.signUpForm.controls.password.value,
      name: this.signUpForm.controls.name.value
    }
    this.userControllerService.add(data).subscribe(response => {
      if (response.data === 200) {
        Swal.fire("Başarılı","Kullanıcı başarıyla oluşturuldu","success");
      } else {
        Swal.fire("Hata","Lütfen girdiğiniz bilgileri kontrol ediniz!","error");
      }
    })
  }*/
}
