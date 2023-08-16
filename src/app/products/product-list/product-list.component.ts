import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { Product } from "../product";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements AfterViewInit {
  // products = ["WebCam", "Microphone", "Wireless Keyboard"];

  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.name);
    }
  }

  selectedProduct : Product | undefined;
  products: Product[] = [
    {name: "WebCam", price: 100},
    {name: "Microphone", price: 200},
    {name: "Wireless Keyboard", price: 85}
  ]
  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }

  trackByProducts(index: number, name: string): string {
    console.log("trackByProducts", index, name);
    return name;
  }
}
