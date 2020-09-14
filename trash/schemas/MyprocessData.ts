// export class MyProcessData {

//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public approved: boolean
//   ) {  }

// }

export class MyProcessData {
  public firstName: string,
  public lastName: string,
  public approved: boolean

  public constructor(init?: Partial<MyProcessData>) {
    return Object.assign(this, init);
  }
}