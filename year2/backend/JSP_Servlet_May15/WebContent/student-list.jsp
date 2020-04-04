<%@page import="az.developia.student.model.Student"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<title>student list</title>
</head>
<body>
<%! int myAge=27; %>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Name</th>
				<th>Surname</th>
			</tr>
		</thead>
		<tbody>
			<%
				ArrayList<Student> students = (ArrayList<Student>) session.getAttribute("students");
				for (Student s : students) {
					
			%>

			<tr>
				<td><%=s.getName()%></td>
				<td><%=s.getSurname()%></td>
			</tr>

			<%
				}
			%>
		</tbody>
	</table>

<hr>

<%

out.println(Student.aminal);

%>
</body>
</html>










