export interface productType {
    id:number
    image: string , 
    title : string , 
    weight: string ,
    price: string ,
    calories:string
    ingredients: string[] , 
    vegan : boolean ,
    readOnly:boolean
}

export interface productsListType {
    categoryName: string ,
    originalProductsList: productType[] ,
    filteredProductsList: productType[] 
}