export interface Product {
    id: string,
    name: string,
    price: number,
    sale: boolean,
    slug: string,
    description: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    categoryId: string,
    productPhoto: ProductPhoto[]
    category: ProductCategory
}

export interface ProductPhoto {
    id: string
    photo_url: string
    productId: string
}

export interface ProductCategory {
    id: string
    name: string
    slug: string
    parentId: string | null
}