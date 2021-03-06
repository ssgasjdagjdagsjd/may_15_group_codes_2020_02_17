package az.developia.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import az.developia.hibernate.model.Course;
import az.developia.hibernate.model.Instructor;
import az.developia.hibernate.model.InstructorDetail;
import az.developia.hibernate.model.Student;

public class MainClassOneToManySelect {

public static void main(String[] args) {
	// create session factory
			SessionFactory factory = new Configuration().configure("hibernate.cfg.xml")
					.addAnnotatedClass(Student.class).addAnnotatedClass(Instructor.class)
					.addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class)
					.buildSessionFactory();
			// create session
			Session session = factory.getCurrentSession();
			try {
				// now use the session object to save/retrieve Java objects
				// create student object
			 
				session.beginTransaction();
				// save object
				InstructorDetail tempInstructorDetail = session.get(InstructorDetail.class, 6);
			  System.out.println(tempInstructorDetail);
			  System.out.println(tempInstructorDetail.getInstructor());
			  System.out.println(tempInstructorDetail.getInstructor().getCourses());
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
