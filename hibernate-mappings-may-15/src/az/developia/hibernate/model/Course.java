package az.developia.hibernate.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="id")
private int id;
@Column(name="title")
private String title;
@ManyToOne
@JoinColumn(name="instructor_id")
private Instructor instructor;

@ManyToMany
@JoinTable(
name="course_student",
joinColumns=@JoinColumn(name="course_id"),
inverseJoinColumns=@JoinColumn(name="student_id")
)
private List<Student> students;


// constructors, getters / setters
public Course(String title) {
	 
	this.title = title;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public Instructor getInstructor() {
	return instructor;
}
public void setInstructor(Instructor instructor) {
	this.instructor = instructor;
}
@Override
public String toString() {
	return "Course [id=" + id + ", title=" + title + "]";
}

public Course( ) {
	 
 
}
public void addStudent(Student student){
	if(this.students==null){
		this.students=new ArrayList<>();
	}
	
	this.students.add(student);
	
	
}
}