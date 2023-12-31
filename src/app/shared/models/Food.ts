export class Food {
    id!: number;
    name!: string;
    price!: number;
    imageUrl!: string;
    tags?: string[];
    favourite: boolean = false;
    origins!: string[];
    cookingTime!: string;
    stars: number = 0
}
