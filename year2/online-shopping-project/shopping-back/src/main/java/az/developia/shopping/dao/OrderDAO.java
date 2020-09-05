package az.developia.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.Order;

public interface OrderDAO extends JpaRepository<Order, Integer> {
public List<Order> findAllByUsername(String username);
}
