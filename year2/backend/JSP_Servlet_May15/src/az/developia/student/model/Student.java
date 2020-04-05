package az.developia.student.model;

public class Student {
	private String name;
	private String surname;
	private String sector;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}

	
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public static String getAminal() {
		return aminal;
	}
	public static void setAminal(String aminal) {
		Student.aminal = aminal;
	}


	public static String aminal="DOG";
}
