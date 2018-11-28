import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ModelModule } from "./model";
import { CommonModule } from "./common/common.module";
import { ComponentsModule } from "./components/components.module";
import { ProductFormComponent } from "./components/productForm.component";
import { ProductTableComponent } from "./components/productTable.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        ModelModule, CommonModule, ComponentsModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
    })
export class AppModule { }
