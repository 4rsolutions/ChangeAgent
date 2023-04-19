import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Gift } from '../../gift.model';

const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {

  gifts: Gift[] = [];

  formModel = new Gift(uuidv4(),'1','2','Mock Gift 1','No Path Yet','This is the first gift ever','250');
  constructor(public http: HttpService) { }



  ngOnInit(): void {
    this.loadGifts();
  }

  loadGifts() {
    return this.http.getGifts().subscribe(
      (data: Gift[]) => {
        this.gifts = data;
        console.log(this.gifts);
      }
    )
  }

  onSubmit(newGift: Gift) {
    return this.http.putGift(newGift).subscribe(
      (data: any) => {
        this.loadGifts();
        console.log(data);
      }
    )
  }
}


