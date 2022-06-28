export interface Product {
    id: string,
    nameProd: string,
    shop: string,
    price: number,
    stocks: number,
    purchased: number,
    city: 'Bogota' | 'Cali' | 'Cali-Bogota'
}

export const Cities = ['Bogota', 'Cali', 'Cali-Bogota']


