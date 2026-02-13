import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from '../common/common';

@Component({
  selector: 'app-final-page',
  standalone: true,
  imports: [],
  templateUrl: './final-page.html',
  styleUrl: './final-page.scss',
})
export class FinalPage implements OnInit, OnDestroy{
  protected commonService = inject(Common);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.commonService.closingAudio.play();
  }

  ngOnDestroy(): void {
    this.commonService.audioList.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  goHome(): void{
    this.commonService.closingAudio.pause();
    this.router.navigate(['/']);
  }
}
