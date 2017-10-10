import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subCategory:any;
  products:any;
  orders:any = [];
  constructor(private http:HttpClient){
  	this.orders = [];
  	this.http.get('../assets/data.json').subscribe(data => {
  		this.subCategory = data['menudetails'];
  		this.products = this.subCategory[0].products
  		console.log(this.subCategory);
  	});
  }
  showProducts(products){
  	this.products = products;
  }
  addOrder(product){
  	if(this.orders.length == 0){
  		product.qty = 1;
  		this.orders.push(product);
  	}else{
	  	for(let i = 0; i < this.orders.length; i++){
	  		if(this.orders[i].productid == product.productid){
	  			this.orders[i].qty = this.orders[i].qty + 1;
	  			break;
	  		}else if(i == this.orders.length -1 ){
	  			product.qty = 1;
	  			this.orders.push(product);
	  			break;
	  		}
	  	}
  	}
  	
  }
}
