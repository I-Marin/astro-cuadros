import type { Image } from "@interfaces/image";

export default interface Product {
    id: number;
    attributes: {
        slug: string;
        title: string;
        price: number;
        description: string;
        image: Image;
        category: string;
    };        
}