package az.developia.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import az.developia.hibernate.model.Course;
import az.developia.hibernate.model.Instructor;
import az.developia.hibernate.model.InstructorDetail;
import az.developia.hibernate.model.Student;

public class MainClassManyToManySelect {

public static void main(String[] args) {
	// create session factory
			SessionFactory factory = new Configuration().configure("hibernate.cfg.xml")
					.addAnnotatedClass(Student.class) 
					. addAnnotatedClass(Course.class). addAnnotatedClass(Instructor.class). addAnnotatedClass(InstructorDetail.class)
					.buildSessionFactory();
			// create session
			Session session = factory.getCurrentSession();
			try {
				// now use the session object to save/retrieve Java objects
				// create student object
			 
				session.beginTransaction();
				// save object
				Student s = session.get(Student.class, 12);
			  System.out.println(s);
			  System.out.println(s.getCourses());
			 
			  
			  System.out.println(s.getCourses().get(0).getStudents());
			}catch(Exception exc){ 
				 
				exc.printStackTrace();
			}finally {
				
				// close session
				session.close();
				// close session factory
				factory.close();
			}
}

}
