import { Component } from '@angular/core';
import { AuthForm } from '../../components/auth-form/auth-form';

@Component({
  selector: 'app-login',
  imports: [AuthForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true
})
export class Login {}
