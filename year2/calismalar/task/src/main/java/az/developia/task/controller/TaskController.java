package az.developia.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.task.dao.TaskDAO;
import az.developia.task.model.Task;

@RestController
@RequestMapping(path="/tasks")
@CrossOrigin(origins="*")
public class TaskController {

	
	@Autowired
	private TaskDAO taskDAO;
	
	@GetMapping
	public List<Task> findAll(){
		return taskDAO.findAll();
	}
	
	
	@PostMapping
	public Integer add(@RequestBody Task task){
		task.setId(null);
		
		return taskDAO.save(task).getId();
	}
	
	@GetMapping(path="/{id}")
	public  Task findById(@PathVariable(name="id") Integer id){
		return taskDAO.findById(id).get();
	}
	
	@DeleteMapping(path="/{id}")
	public  void deleteById(@PathVariable(name="id") Integer id){
		  taskDAO.deleteById(id) ;
	}
	
	
	
	@PutMapping
	public void update(@RequestBody Task task){
		  taskDAO.save(task) ;
	}
	
	
}
