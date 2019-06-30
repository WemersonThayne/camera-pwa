import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource, CameraDirection  } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // imageURL: any;
  captures: Array<any>;
  video: any;
  constraints: any = {
    video: true
  };

  constructor() {
    this.captures = [];
  }

  ngOnInit() {
    
  }

  async takePhoto(){
    const { Camera } = Plugins;
      Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        correctOrientation: true,
        direction: CameraDirection.Rear,
        source:CameraSource.Camera,
        saveToGallery:false
      }).then(image => {
        let imageUrl = image.webPath;
        console.log(imageUrl);
        // this.imageURL.src = imageUrl;
      })
  }

  public ngAfterViewInit() {

    this.video = document.getElementById('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      /*setting capture only video*/
      navigator.mediaDevices.getUserMedia(this.constraints).then((stream) => {
        /*set stream on element*/
        this.video.srcObject = stream;
        this.video.play();
        //this.video = video;
      }, (error) => {
        console.log('Error to getStream camera: ', error);
      });
    }

  }


  public capture() {
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
