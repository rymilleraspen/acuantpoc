import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Output() uploadedFile = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  private dataURLtoBlob(dataURL) {
    const binary = atob(dataURL.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpg'});
  }
  fileUpload(event) {

    const reader = new FileReader();
    const file = event.target;
    reader.onload = (e) => {
      // @ts-ignore:
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        const img = document.createElement('img');
        // @ts-ignore:
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const MAX_WIDTH = 3032;
          const MAX_HEIGHT = 2008;
          let width = img.width;
          let height = img.height;

          if (width > height) {
              if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
              }
          } else {
              if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
              }
          }

          canvas.width = width;
          canvas.height = height;
          ctx = canvas.getContext('2d');
          ctx.mozImageSmoothingEnabled = false;
          ctx.webkitImageSmoothingEnabled = false;
          // @ts-ignore:
          ctx.msImageSmoothingEnabled = false;
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(img, 0, 0, width, height);
          const dataurl = canvas.toDataURL(file.files[0].type, 90 * .01);
          const dataBlob = this.dataURLtoBlob(dataurl);
          this.uploadedFile.emit(dataBlob);
        };
      }
    };
    reader.readAsDataURL(file.files[0]);
  }
}
