package az.developia.hibernate.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="instructor")
public class Instructor {
 

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="id")
private int id;
@Column(name="first_name")
private String firstName;
@Column(name="last_name")
private String lastName;
@Column(name="email")
private String email;

@OneToOne(cascade={CascadeType.PERSIST})
@JoinColumn(name="instructor_detail_id")
private InstructorDetail instructorDetail;

@OneToMany(mappedBy="instructor",cascade={CascadeType.PERSIST})
private List<Course> courses;


public Instructor(String firstName, String lastName, String email ) {
	 
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	 
}

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

public InstructorDetail getInstructorDetail() {
	return instructorDetail;
}

public void setInstructorDetail(InstructorDetail instructorDetail) {
	this.instructorDetail = instructorDetail;
}

@Override
public String toString() {
	return "Instructor [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
			+ ", instructorDetail=" + instructorDetail + "]";
}

public Instructor() {
	 
}

// constructors, getters / setters



public void addCourse(Course course){
	if(this.courses==null){
		courses=new ArrayList<>();
	}
	this.courses.add(course);
	course.setInstructor(this);
}

public List<Course> getCourses() {
	return courses;
}

public void setCourses(List<Course> courses) {
	this.courses = courses;
}


}