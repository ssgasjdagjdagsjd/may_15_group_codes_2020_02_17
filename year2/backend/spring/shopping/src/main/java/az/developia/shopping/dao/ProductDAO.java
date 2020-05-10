package az.developia.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import az.developia.shopping.model.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {

	@Query(value="select * from product where name like %?3% limit ?1,?2",nativeQuery=true)
	// where name like %apple% limit 0,3
	public List<Product> findPartial(Integer begin,Integer length,String searchKey);
	
	
}
