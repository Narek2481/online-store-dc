export interface IRegistration {
    name:string;
    email:string,
    password:string,
    phone?: string,
    street?: string,
    apartment?:string ,
    zip?:string,
    city?:string,
    country?:string
}

export interface ILogin {
    email:string;
    password:string;
}

export interface ICategories {
    _id: string,
    name: string,
    icon: string,
    color: string,
}


export interface IProduct{
    richDescription: string,
    image: string,
    images: any[],
    brand: string,
    price: number,
    rating: string,
    numReviews: number,
    isFeatured: boolean,
    name: string,
    description: string,
    category:ICategories,
    countInStock: number,
    id: string
}


export interface IAuthContext {
    token?: string | null;
    setToken?: Function
}

export interface IProductForOrder {
    orderItems: { quantity: string; product: string, price: string }[]
}


export  interface IOrderResponse {
    orderItems: {
            _id: string,
            quantity: string,
            product: IProduct,
        }[]
    ,
    status: string,
    _id: string,
    shippingAddress1: string,
    city: string
    zip: string
    country: string
    phone: string,
    totalPrice: string,
    user: {
        _id: string,
        name: string,
        id: string
    },
    id: string
}
