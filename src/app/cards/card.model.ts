export class Cards {
  public name: string;
  public img: string;
  public price: number;
  public desc: string;
  public add: boolean;
  constructor(name, img, price, desc, add) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.desc = desc;
    this.add = add;
  }
}
