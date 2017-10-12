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
        { Name: "Bubble Top", ImageURL: "assets/products/BT.jpg", Amount: 45, Description: "20 litres bubble top" },
        { Name: "2L Bottle", ImageURL: "assets/products/2lit.jpg", Amount: 32, Description: "2 litres bottle" },
        { Name: "1L Bottle", ImageURL: "assets/products/1lit.jpg", Amount: 22, Description: "1 litre bottle" },
        { Name: "500ml Bottle", ImageURL: "assets/products/500ml.jpg", Amount: 14, Description: "500ml bubble top" }
    ];
    constructor(public navCtrl: NavController) {

    }


}

class ProductModel {
    Name: string;
    ImageURL: string;
    Amount: Number;
    Description: string;
}
