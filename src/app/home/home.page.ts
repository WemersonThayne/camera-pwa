import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  captures: Array<any>;
  video: any;
  
  constructor() {
    this.captures = [];
  }

  ngOnInit() {
    
  }

  public capture(mode) {

    this.video = document.getElementById('video');

   let constraints: any = {
      video: {facingMode: {exact: mode}}
    };
  
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      /*setting capture only video*/
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        /*set stream on element*/
        this.video.srcObject = stream;
        this.video.play();
        //this.video = video;
      }, (error) => {
        console.log('Error to getStream camera: ', error);
      });
    }

  }


  public capture2() {
    let canvas: any = document.getElementById('canvas');
    let context: any = canvas.getContext('2d');
    // Trigger photo take
    context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
    this.captures.push(canvas.toDataURL("image/png"));
    console.log(this.captures);
    // this.stopCamera();
  }

  private stopCamera() {
    this.video.srcObject.getVideoTracks().forEach(track => {
      track.stop();
    });
  }

}
