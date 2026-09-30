import { Component } from '@angular/core';
import { Breadcrumb } from '../../../shared/breadcrumb/breadcrumb';
import { Navbar } from '../../../shared/navbar/navbar';

@Component({
  selector: 'app-pets',
  imports: [Breadcrumb, Navbar],
  templateUrl: './pets.html',
  styleUrl: './pets.scss',
  standalone: true
})
export class Pets {}
