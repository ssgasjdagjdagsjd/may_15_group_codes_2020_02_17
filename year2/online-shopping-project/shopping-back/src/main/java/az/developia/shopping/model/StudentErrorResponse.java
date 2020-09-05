package az.developia.shopping.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentErrorResponse {
	private boolean success; // if operation success
	private int status; // http status code
	private String message; // for end user
	private String internalMessage; // for developer
	private long timeStamp;
public StudentErrorResponse() {
	 
}
public StudentErrorResponse(boolean success, int status, String message, String internalMessage, long timeStamp) {
	 
	this.success = success;
	this.status = status;
	this.message = message;
	this.internalMessage = internalMessage;
	this.timeStamp = timeStamp;
}
}