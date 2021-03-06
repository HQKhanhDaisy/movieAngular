import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../../../util/MyErrorStateMatcher';
import {MAT_DATE_FORMATS} from '@angular/material/core';
import {MY_DATE_FORMATS} from '../../../../util/FOMAT_DATE';
import {MovieCast} from '../../../../model/MovieCast';
import {MovieCastService} from '../../../../service/movie-cast.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UtilClass} from 'src/util/utilClass';
import {UTIL} from 'src/util/util';
import {ImageModel} from '../../../../model/ImageModel';
import {UploadImageService} from '../../../../service/upload-image.service';

@Component({
  selector: 'app-add-cast-movie',
  templateUrl: './add-cast-movie.component.html',
  styleUrls: ['./add-cast-movie.component.css'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class AddCastMovieComponent implements OnInit {
  castForm: FormGroup;
  maxDate: Date;
  matcher = new MyErrorStateMatcher();
  cast: MovieCast;
  castList: MovieCast[] = [];
  castImage: ImageModel = new ImageModel(UTIL.DEFAUT_MOVIE_POSTER_NAME, UTIL.DEFAULT_ACCOUNT_IMAGE_URL_MALE);
  fileToUpload: File;
  submitted = false;

  constructor(private castService: MovieCastService,
              public dialogRef: MatDialogRef<AddCastMovieComponent>,
              private uploadImage: UploadImageService,
              @Inject(MAT_DIALOG_DATA) public data: MovieCast[]) {
  }

  ngOnInit() {
    this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.castForm = new FormGroup({
      avatar: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      story: new FormControl('')
    });
  }

  async saveCast() {
    this.submitted = true;
    if (this.castForm.valid) {
      this.cast = new MovieCast(
        null,
        this.castForm.value.avatar,
        this.castForm.value.name,
        this.castForm.value.story,
        this.castForm.value.birthday);
      await this.uploadImage.uploadImageAll(this.fileToUpload,  UTIL.DEFAULT_IMAGE_CAST).toPromise().then(((result: any) => {
        console.log(result);
        this.cast.avatar = result.path;
      }));
      await this.castService.addCast(this.cast).toPromise().then((data: any) => {
          console.log(data);
          if (data.statusCode === undefined) {
            UtilClass.showMesageAlert(UTIL.ICON_SUCCESS, UTIL.ALERT_MESAGE_SUCCESS_ADD_CAST);
          } else {
            UtilClass.showMesageAlert(UTIL.ICON_ERROR, data.message);
          }
        },
        (error => {
          UtilClass.showMesageAlert(UTIL.ICON_ERROR, error.message);
        }));
    }
  }

  onNoClick() {
    this.castService.getCast().subscribe(((data: any) => {
      this.castList = data;
      console.log(this.castList);
      this.dialogRef.close(this.castList);
    }));
  }

  handleFileUpload(files: any) {
    this.fileToUpload = files.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.castImage = new ImageModel(this.fileToUpload.name, event.target.result);
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
