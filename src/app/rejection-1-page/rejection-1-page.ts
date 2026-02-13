import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from '../common/common';

@Component({
  selector: 'app-rejection-1-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rejection-1-page.html',
  styleUrl: './rejection-1-page.scss',
})
export class Rejection1Page implements OnInit, OnDestroy {

  protected commonService = inject(Common);
  private initialGifUrl = signal<string>(this.commonService.sad1Image);
  private rejectedGifUrl = signal<string>(this.commonService.heartBrokenImage);
  private acceptedGifUrl = signal<string>(this.commonService.horrayImage);

  protected isAccepted = signal<boolean>(true);
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.commonService.rejected1Audio.play();
  }

  ngOnDestroy() {
    this.commonService.audioList.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  handleNoClick(): void {
    this.isAccepted.set(false);
    this.clicked.set(true);
    this.commonService.rejected1Audio.pause();
    setTimeout(() => {
      this.router.navigate(['/I_am_very_Sad']); // Or to rejection-2-page
    }, 1500);
  }

  handleYesClick() {
    this.isAccepted.set(true);
    this.clicked.set(true);
    this.commonService.rejected1Audio.pause();
    setTimeout(() => {
      this.router.navigate(['/Yayy']);
    }, 1500);
  }
}
