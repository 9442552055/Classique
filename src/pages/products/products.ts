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
        { Name: "Bubble Top", ImageURL: "assets/products/BT.jpg", Amount: 1, Description: "20 liters bubble top" },
        { Name: "2 Litre Bottle", ImageURL: "assets/products/2lit.jpg", Amount: 1, Description: "20 liters bubble top" },
        { Name: "1 Litre Bottle", ImageURL: "assets/products/1lit.jpg", Amount: 1, Description: "20 liters bubble top" },
        { Name: "500 Milli-Litre Bottle", ImageURL: "assets/products/500ml.jpg", Amount: 1, Description: "20 liters bubble top" }
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
