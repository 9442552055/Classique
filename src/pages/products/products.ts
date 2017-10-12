import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    name: "Products"
})
@Component({
    selector: 'products',
    templateUrl: 'products.html'
})
export class ProductsPage {

    Title: string = "Products"
    Products: ProductModel[] = [
        { Name: "Bubble Top", ImageURL: "assets/products/BT.jpg", Quantity: 0, Amount: 45, Description: "20 litres bubble top" },
        { Name: "2L Bottle", ImageURL: "assets/products/2lit.jpg", Quantity: 0, Amount: 32, Description: "2 litres bottle" },
        { Name: "1L Bottle", ImageURL: "assets/products/1lit.jpg", Quantity: 0, Amount: 22, Description: "1 litre bottle" },
        { Name: "500ml Bottle", ImageURL: "assets/products/500ml.jpg", Quantity: 0, Amount: 14, Description: "500ml bottle" },
        { Name: "350ml Bottle", ImageURL: "assets/products/350ml.jpg", Quantity: 0, Amount: 12, Description: "350ml bottle" },
        { Name: "300ml Bottle", ImageURL: "assets/products/300ml.jpg", Quantity: 0, Amount: 10, Description: "300ml bottle" },
        { Name: "250ml Sachets", ImageURL: "assets/products/250ml.jpg", Quantity: 0, Amount: 7, Description: "250ml Sachets" }
    ];
    constructor(public navCtrl: NavController) {

    }
    inc = (product) => {
        product.Quantity = product.Quantity ? parseInt(product.Quantity) : 0
        product.Quantity = product.Quantity < 10000 ? product.Quantity + 1 : 1;
    }

    dec = (product) => {
        product.Quantity = product.Quantity ? parseInt(product.Quantity) : 0
        product.Quantity = product.Quantity && product.Quantity > 0 ? product.Quantity - 1 : 0;
    }

}

class ProductModel {
    Name: string;
    ImageURL: string;
    Amount: Number;
    Description: string;
    Quantity: Number;
}
