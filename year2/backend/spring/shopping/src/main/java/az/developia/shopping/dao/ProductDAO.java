package az.developia.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {

}
