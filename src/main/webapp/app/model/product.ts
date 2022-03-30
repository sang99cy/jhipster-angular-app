/* export interface IProduct {
  productId?: string;
  productName?: string;
  productPrice?: number;
  productStock?: number;
  productDescription?: string;
  productIcon?: string;
  productStatus?: number;
  categoryType?: number;
  createTime?: string;
  updateTime?: string;
} */

export class Product {
  productId!: string;
  productName!: string;
  productPrice!: number;
  productStock!: number;
  productDescription!: string;
  productIcon!: string;
  productStatus!: number;
  categoryType!: number;
  createTime!: string;
  updateTime!: string;
}
