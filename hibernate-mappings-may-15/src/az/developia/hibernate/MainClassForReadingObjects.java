package az.developia.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class MainClassForReadingObjects {

public static void main(String[] args) {
	// create session factory
			SessionFactory factory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Student.class)
					.buildSessionFactory();
			// create session
			Session session = factory.getCurrentSession();
			try { 
				session.beginTransaction();
				 
				Student student=(Student)session.get(Student.class,1);
				 
				System.out.println("student = "+student);
				  
			}catch(Exception exc){ 
				// Atomized
				session.getTransaction().rollback();
				exc.printStackTrace();
			}finally {
				
				// close session
				session.close();
				// close session factory
				factory.close();
			}
}

}
