import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  images="assets/img_1.jpg";
  isDisabled = false;
  count =0;
  //2way binding
  name = "neha";

  constructor() { }

  ngOnInit() {
  }

  counter(){
    this.count++;
    this.count ===10 ? this.isDisabled = true:this.isDisabled  = false;
  }
  reset(){
    this.count = 0;
  }

}
