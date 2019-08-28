export class Product {
    public id: number;
    public title: string;
    public media: {};
    public average_rating: number;
    public average_rating_percentage: number;
    public product_type: string;
    public description: string;
    public body: string;
    public certification: string;
    public categories: [{}];
    public kitchen: {};
    public preservatives_free: boolean;

    public constructor(
        id: number,
        title: string,
        media: {},
        average_rating: number,
        average_rating_percentage: number,
        product_type: string,
        description: string,
        body: string,
        certification: string,
        categories: [{}],
        kitchen: {},
        preservatives_free: boolean
    ) {
        this.id = id;
        this.title = title;
        this.media = media;
        this.average_rating = average_rating;
        this.average_rating_percentage = average_rating_percentage;
        this.product_type = product_type;
        this.description = description;
        this.body = body;
        this.certification = certification;
        this.categories = categories;
        this.kitchen = kitchen;
        this.preservatives_free = preservatives_free;
    }
}
