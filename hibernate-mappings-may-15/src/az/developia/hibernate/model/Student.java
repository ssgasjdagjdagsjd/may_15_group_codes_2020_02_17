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
import javax.persistence.Table;
 
@Entity
@Table(name="student")
public class Student {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
@Column(name="first_name")
private String firstName;
 

@Column(name="last_name")
private String lastName;

@Column(name="email")
private String email;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public Student(String firstName, String lastName, String email) {
	 
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
}
@Override
public String toString() {
	return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
}
public Student() {
	 
}
@ManyToMany
@JoinTable(
name="course_student",
joinColumns=@JoinColumn(name="student_id"),
inverseJoinColumns=@JoinColumn(name="course_id")
)
private List<Course> courses;

public void addCourse(Course course){
	if(this.courses==null){
		courses=new ArrayList<>();
	}
	this.courses.add(course);
	//course.addStudent(this);
	 
}



}