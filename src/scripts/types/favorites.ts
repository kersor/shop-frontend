import { Product } from "./product";

export interface ReqGetAllProductInFavorites {
    createdAt: string;
    favoriteId: string;
    isFavorite: boolean
    product: Product;
    productId: string;
}