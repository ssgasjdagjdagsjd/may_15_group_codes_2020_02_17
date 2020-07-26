package az.developia.shopping_may15.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import az.developia.shopping_may15.model.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {

	@Query(value="select * from product where  concat(name,price,ifnull(image,'')) like %?3% limit ?1,?2",nativeQuery=true)
	// where name like %apple% limit 0,3
	public List<Product> findPartial(Integer begin,Integer length,String searchKey);
	public List<Product> findAllByUsername(String username);
	
	 
}
