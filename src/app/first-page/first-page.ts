import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from '../common/common';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.scss',
})
export class FirstPage implements OnInit, OnDestroy{

  protected commonService = inject(Common);

  private initialGifUrl = signal<string>(this.commonService.askValentineImage);
  private rejectedGifUrl = signal<string>(this.commonService.heartBrokenImage);
  private acceptedGifUrl = signal<string>(this.commonService.horrayImage);

  protected showSplash = signal<boolean>(true);
  protected isAccepted = signal<boolean | null>(null);
  protected clicked = signal<boolean>(false);

  protected gifUrl = computed(() => {
    switch (this.isAccepted()) {
      case true:
        return this.acceptedGifUrl();
      case false:
        return this.rejectedGifUrl();
      default:
        return this.initialGifUrl();
    }
  });

  constructor(private router: Router){}

  ngOnInit() {
    this.commonService.openingAudio.play();
    setTimeout(() => {
      this.showSplash.set(false);
    }, 7500);
  }

  ngOnDestroy() {
    this.commonService.audioList.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  handleNoClick(): void{
    this.isAccepted.set(false);
    this.clicked.set(true);
    this.commonService.openingAudio.pause();
    setTimeout(() => {
      this.router.navigate(['/I_am_Sad']);
    }, 1500);
  }
  
  handleYesClick() {
    this.isAccepted.set(true);
    this.clicked.set(true);
    this.commonService.openingAudio.pause();
    setTimeout(() => {
      this.router.navigate(['/Yayy']);
    }, 1500);
  }
}

