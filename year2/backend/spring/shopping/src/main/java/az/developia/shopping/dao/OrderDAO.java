package az.developia.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.Order;

public interface OrderDAO extends JpaRepository<Order, Integer> {

}
