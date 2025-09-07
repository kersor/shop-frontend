import { Product } from "./product";

// + \ -
export type TypeToggleCountProductDto = "increment" | "decrement"

export interface ResToggleCountProductDto {
    type: TypeToggleCountProductDto
    productId: string
}

export interface ReqGetAllProductInCart {
    cartId: string;
    productId: string;
    count: number;
    product: Product;
}

export interface ReqGetAllProductsInCart {
    total: number
    data: ReqGetAllProductInCart[]
}

export interface ReqDeleteProductInCart {
    productId: string
}