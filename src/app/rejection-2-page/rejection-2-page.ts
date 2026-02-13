import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from '../common/common';

@Component({
  selector: 'app-rejection-2-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rejection-2-page.html',
  styleUrl: './rejection-2-page.scss',
})
export class Rejection2Page implements OnInit, OnDestroy {
  protected commonService = inject(Common);
  private initialGifUrl = signal<string>(this.commonService.sad2Image);
  private rejectedGifUrl = signal<string>(this.commonService.heartBrokenImage);
  private acceptedGifUrl = signal<string>(this.commonService.horrayImage);

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

  protected isChanged = signal<boolean>(false);

  protected noBtnClass = computed(() => {
    return this.isChanged() || this.isAccepted() ? "yes-btn" : "no-btn";
  });

  protected noBtnMsg = computed(() => {
    return this.isChanged() || this.isAccepted() ? "YESS I WILL BE YOUR VALENTINE" : "I am sorry but I have to"; 
  })

  constructor(private router: Router) {}

  ngOnInit() {
    this.commonService.rejected2Audio.play();
  }

  ngOnDestroy() {
    this.commonService.audioList.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  handleNoClick(): void {
    this.isAccepted.set(true);
    this.clicked.set(true);
    this.commonService.rejected2Audio.pause();
    setTimeout(() => {
      this.router.navigate(['/Yayy']);
    }, 1500);
  }

  handleYesClick() {
    this.isAccepted.set(true);
    this.clicked.set(true);
    this.commonService.rejected2Audio.pause();
    this.isChanged.set(true);
    setTimeout(() => {
      this.router.navigate(['/Yayy']);
    }, 1500);
  }
}
