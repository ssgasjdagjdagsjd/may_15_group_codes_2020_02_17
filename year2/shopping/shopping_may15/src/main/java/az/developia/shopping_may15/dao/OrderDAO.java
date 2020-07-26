package az.developia.shopping_may15.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping_may15.model.Order;

public interface OrderDAO extends JpaRepository<Order, Integer> {
public List<Order> findAllByUsername(String username);
}
