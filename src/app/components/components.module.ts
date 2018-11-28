import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "../common/common.module";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { paDiscountDisplayComponent } from "./discountDisplay.component";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [PaDiscountEditorComponent, paDiscountDisplayComponent,
      ProductFormComponent, ProductTableComponent],
  exports: [ProductFormComponent, ProductTableComponent]
})
export class ComponentsModule { }
