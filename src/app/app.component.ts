import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  width = 320;
  height = 0;
  streaming = false;
  startbutton = null;

  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('photo') photo: ElementRef;

  constructor(private _store: Store<any>) {
    this._store.select('demographics').subscribe(res => console.log(res));
  }

  ngOnInit() {

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
              .then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
              })
              .catch(err => console.error);

    this.video.nativeElement.addEventListener('canplay', (ev) => {
      if (!this.streaming){
        this.height = this.video.nativeElement.videoHeight / (this.video.nativeElement.videoWidth / this.width);
        console.log(this.height)
        this.video.nativeElement.setAttribute('width', this.width);
        this.video.nativeElement.setAttribute('height', this.height);
        this.canvas.nativeElement.setAttribute('width', this.width);
        this.canvas.nativeElement.setAttribute('height', this.height);
        this.streaming = true;

      }
    }, false);
  }

  private takePicture() {
    console.log('taking picture');
    const context = this.canvas.nativeElement.getContext('2d');
    console.log(this.width, this.height);
    if (this.width && this.height) {
      this.canvas.nativeElement.width = this.width;
      this.canvas.nativeElement.height = this.height;
      context.drawImage(this.video.nativeElement, 0, 0, this.width, this.height);
      const data = this.canvas.nativeElement.toDataUrl('image/png');
      this.photo.nativeElement.setAttribute('src', data);
      console.log(data);

    }

  }
  captureImage() {
    this.takePicture();
  }
}
