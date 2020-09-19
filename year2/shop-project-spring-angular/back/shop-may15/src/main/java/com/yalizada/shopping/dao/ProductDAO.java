package com.yalizada.shopping.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.yalizada.shopping.model.Product;
 

@CrossOrigin("*")
public interface ProductDAO extends JpaRepository<Product, Long> {
	 
	
}
