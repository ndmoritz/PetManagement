import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  imports: [Navbar, Breadcrumb, RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
  standalone: true
})
export class AppLayout {}
