import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Common {
  openingAudio = new Audio('music/Doki_Doki_OST.mp3');
  rejected1Audio = new Audio('music/My_Feelings.mp3');
  rejected2Audio = new Audio('music/My_Confession.mp3');
  closingAudio = new Audio('music/Play_with_Me.mp3');

  kissKissImage = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-love.gif";
  coolBoyfriendImage = "https://media.tenor.com/2vzT-8oPXl8AAAAi/tkthao219-bubududu.gif";
  askValentineImage = "https://media.tenor.com/5hNFjHWQYKQAAAAi/bubu-dudu-sseeyall.gif";
  heartBrokenImage = "https://media.tenor.com/M8tjS3gs04cAAAAi/mocha-broken-heart.gif";
  sad1Image = "https://media.tenor.com/rwZ1KmV8ZAoAAAAi/bubu-dudu-sseeyall.gif";
  sad2Image = "https://media.tenor.com/Qu6GUg0Yx90AAAAi/mocha-cry.gif";
  horrayImage = "https://media.tenor.com/WiQQRwR2QFAAAAAi/cute-panda.gif";
  finalImage = "https://media1.tenor.com/m/eneaKz5SJrEAAAAd/tkthao219-bubududu.gif";

  audioList = [
    this.openingAudio,
    this.rejected1Audio,
    this.rejected2Audio,
    this.closingAudio
  ];
}
