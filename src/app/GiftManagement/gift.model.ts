export class Gift {
    public id: string;
    public familyID: string;
    public memberID: string;
    public title: string;
    public imagePath: string;
    public description: string;
    public cost: string;

    constructor(id: string, familyID: string, memberID: string, 
                title: string, imagePath: string, description: string, cost: string) {
        this.id=id;
        this.familyID = familyID;
        this.memberID =memberID;
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.cost = cost;
    }
}