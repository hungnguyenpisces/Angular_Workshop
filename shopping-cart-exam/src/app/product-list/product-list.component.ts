import { Component, OnInit } from '@angular/core';
import { products } from 'src/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  share()
  {
    window.alert('The product has been shared');
  }
  onNotify()
  {
    window.alert('you will notifier product on sales');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
