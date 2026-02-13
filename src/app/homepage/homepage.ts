import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Common } from '../common/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage{
  protected commonService: Common = inject(Common);

  constructor(private router: Router) {}

  start() {
    this.router.navigate(['/Be_My_Valentine']);
  }
}