package az.developia.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import az.developia.hibernate.model.Instructor;
import az.developia.hibernate.model.InstructorDetail;

public class MainClassOneToOneSelect {

public static void main(String[] args) {
	// create session factory
			SessionFactory factory = new Configuration().configure("hibernate.cfg.xml")
					.addAnnotatedClass(Student.class).addAnnotatedClass(Instructor.class)
					.addAnnotatedClass(InstructorDetail.class)
					.buildSessionFactory();
			// create session
			Session session = factory.getCurrentSession();
			try {
				// now use the session object to save/retrieve Java objects
				// create student object
			 
				session.beginTransaction();
				// save object
				Instructor tempInstructor = session.get(Instructor.class, 4);
			  System.out.println(tempInstructor.getInstructorDetail());
				
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
