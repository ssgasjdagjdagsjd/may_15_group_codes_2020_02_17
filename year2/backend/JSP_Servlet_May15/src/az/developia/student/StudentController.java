package az.developia.student;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import az.developia.student.model.Student;

@WebServlet("/student-controller")
public class StudentController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private ArrayList<Student> students=new ArrayList<>();
	
	
	public StudentController() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		
		String name=request.getParameter("name");
		String surname=request.getParameter("surname");
		String sector=request.getParameter("sector");
		
		
		Student s=new Student();
		
		s.setName(name);
		s.setSurname(surname);
		s.setSector(sector);
		students.add(s);
		
		HttpSession session=request.getSession();
		
		session.setAttribute("students", students);
		
		//RequestDispatcher dispatcher=request.getRequestDispatcher("student-list.jsp");
		//dispatcher.forward(request, response);
		response.sendRedirect("student-list.jsp");
		
		
	}

}
