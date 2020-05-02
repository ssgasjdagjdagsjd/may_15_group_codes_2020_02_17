package az.developia.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class MainClass {
public static void main(String[] args) {
	// create session factory
			SessionFactory factory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Student.class)
					.buildSessionFactory();
			// create session
			Session session = factory.getCurrentSession();
			try {
				// now use the session object to save/retrieve Java objects
				// create student object
				System.out.println("creating student object...");
				Student s = new Student("Yusif", "Alizada", "yusifedu@gmail.com");
				// begin transaction
				session.beginTransaction();
				// save object
				Integer generatedId=(Integer)session.save(s);
				// error code
				System.out.println("generatedId = "+generatedId);
				
				Product pr=new Product();
				pr.setName("Apple");
				session.save(pr);
				
				
				// commit transaction
				session.getTransaction().commit();
				
			}catch(Exception exc){ 
				// atomicity
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
