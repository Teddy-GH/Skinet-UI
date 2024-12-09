import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Pagination>('https://localhost:7073/api/products?pageSize=50').subscribe((response: Pagination) => {
      this.products = response.data;
    }, error => {
      console.log('Error', error);
    });
  }

}
