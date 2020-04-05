<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page import="az.developia.student.model.Student"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
	
	<c:set var="theLocale"
value="${not empty param.theLocale ? param.theLocale : pageContext.request.locale}"
scope="session" />
<fmt:setLocale value="${theLocale}" />
<fmt:setBundle basename="az.developia.student.i18n.sozler" />



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
				<th><fmt:message key="name" /></th>
				<th><fmt:message key="surname" /></th>
				<th>Sector</th>
			</tr>
		</thead>
		<tbody>
		 
		</tbody>
	</table>

<hr>

 
<a href="student-list.jsp?theLocale=en_US">English</a>
 |
<a href="student-list.jsp?theLocale=az_AZ">Azerbaijan</a>
 |
<a href="student-list.jsp?theLocale=ru_RU">Russian</a>
 |
<a href="student-list.jsp?theLocale=es_ES">Ispan</a>

<hr>
<fmt:message key="hello" />
<fmt:message key="how_are_you" />
 <hr>
 <fmt:message key="hello" />
</body>
</html>










