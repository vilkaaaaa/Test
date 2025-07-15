export class server{
  //метод для умножения
  async multiplication(item: number) {
    const item2= await item*2;
    return item2;
  }
}
