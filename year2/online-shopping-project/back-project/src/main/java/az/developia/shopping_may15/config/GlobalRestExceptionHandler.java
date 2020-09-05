package az.developia.shopping_may15.config;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import az.developia.shopping_may15.model.ProductNotFoundException;
import az.developia.shopping_may15.model.StudentErrorResponse;

 
@RestControllerAdvice
public class GlobalRestExceptionHandler {
	@ExceptionHandler
	public ResponseEntity<StudentErrorResponse> handleNotFoundException(ProductNotFoundException exc){
		StudentErrorResponse error=new StudentErrorResponse();
		error.setStatus(HttpStatus.NOT_FOUND.value());
		error.setMessage("Mehsulun məlumatları tapılmadı, siyahını yeniləyin və siyahıda axtarın.");
		error.setTimeStamp(System.currentTimeMillis());
		error.setInternalMessage(exc.getMessage());
		return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
	}
	 
}