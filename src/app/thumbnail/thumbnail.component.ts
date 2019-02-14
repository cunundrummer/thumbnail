import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'thumb-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() defaultPlaceholderImg: string;
  readonly isDefaultPlaceHolder: boolean = true;
  constructor() { }

  ngOnInit() {
    if (this.defaultPlaceholderImg) {
      console.log(this.defaultPlaceholderImg);
    }
  }

}
