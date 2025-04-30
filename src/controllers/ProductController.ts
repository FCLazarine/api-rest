import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';




class ProductsController {
  constructor(private productService: any) {}

  async getAllProducts(req: any, res: any) {
    try {
      const products = await this.productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  }

  async createProduct(req: any, res: any) {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error creating product' });
    }
  }
  async updateProduct(req: any, res: any) {
    try {
      const product = await this.productService.updateProduct(req.params.id, req.body);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error updating product' });
    }
  }
  async deleteProduct(req: any, res: any) {
    try {
      const product = await this.productService.deleteProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product' });
    }
  }
  async getProductsByCategory(req: any, res: any) {
    try {
      const products = await this.productService.getProductsByCategory(req.params.categoryId);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products by category' });
    }
  }
}

export default ProductsController;
export { ProductsController };



