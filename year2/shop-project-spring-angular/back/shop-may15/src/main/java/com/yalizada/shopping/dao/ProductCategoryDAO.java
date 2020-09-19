package com.yalizada.shopping.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.yalizada.shopping.model.ProductCategory;

@CrossOrigin("*")
 
public interface ProductCategoryDAO extends JpaRepository<ProductCategory, Long> {
}
