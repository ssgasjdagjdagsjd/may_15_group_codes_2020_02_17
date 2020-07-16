package az.developia.task.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.task.model.Task;

public interface TaskDAO extends JpaRepository<Task, Integer> {

}
