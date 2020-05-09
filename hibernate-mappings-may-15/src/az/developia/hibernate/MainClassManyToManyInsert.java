package az.developia.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import az.developia.hibernate.model.*;
 

public class MainClassManyToManyInsert {

	public static void main(String[] args) {
		// create session factory
		SessionFactory factory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Course.class)
				.addAnnotatedClass(Student.class) .addAnnotatedClass(Instructor.class) .addAnnotatedClass(InstructorDetail.class) 

				.buildSessionFactory();
		// create session
		Session session = factory.getCurrentSession();
		try {
			// now use the session object to save/retrieve Java objects
			// create student object

			session.beginTransaction();
			// save object
			 
			
			Instructor tempInstructor = new Instructor("Tofiq", "Ferecli", "tofiq@developia.az");
			InstructorDetail tempInstructorDetail = new InstructorDetail("https://www.youtube.com/channel/UCDnawfNjSXXvEsGNn-oxODA", "Play Chess");
			// associate the objects
			tempInstructor.setInstructorDetail(tempInstructorDetail);
			 
		
			
			Student s1=new Student("Ismayil","Memmedov","ismayil@mail.ru");
			Student s2=new Student("Ferid","Ismayilov","ferid@mail.ru");
			
			
			Course c1=new  Course("java se3");
			Course c2=new  Course("maven3");
			tempInstructor.addCourse(c1);
			tempInstructor.addCourse(c2);
			
			s1.addCourse(c1);
			s1.addCourse(c2);
			
			
			s2.addCourse(c1);
			s2.addCourse(c2);
			session.save(tempInstructorDetail);
			session.save(tempInstructor);
			session.save(s1);
			session.save(s2);
			session.save(c1);
			session.save(c2);
			
			
			
			session.getTransaction().commit();

		} catch (Exception exc) {
			// atomicity
			session.getTransaction().rollback();
			exc.printStackTrace();
		} finally {

			// close session
			session.close();
			// close session factory
			factory.close();
		}
	}

}
