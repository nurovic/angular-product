import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Product } from "../product";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnChanges {
  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  // ngOnInit(): void {
  //     console.log(`Name is ${this.name} in the ngOnInit`)
  // }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }
  @Input() product: Product | undefined;
  @Input() name = "";
  @Output() bought = new EventEmitter<string>();

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }
}
