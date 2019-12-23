export class Nodes{
  public id:string;
  public name:string;
  public childrens: Nodes[];

  constructor(id: string, name: string, child: Nodes[]) {
    this.id = id;
    this.name = name;
    this.childrens = child;
  }
}
