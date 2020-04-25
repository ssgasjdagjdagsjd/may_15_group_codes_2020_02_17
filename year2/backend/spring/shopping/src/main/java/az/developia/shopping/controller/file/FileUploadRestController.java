package az.developia.shopping.controller.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(FileUploadRestController.BASE_URL)
@CrossOrigin(origins = "*")

public class FileUploadRestController {
	public static final String BASE_URL = "/fileupload";
	
	@Autowired
    private StorageService storageService;

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

    @ResponseStatus(HttpStatus.CREATED)


    public String createFile(  @RequestParam(name = "file", required = false) MultipartFile file    ) {
    	 
        String imageFileName ="fakeimage.png";    
        if(file==null){
        	
        }else{
        	imageFileName =   storageService.store(file);
        }
       
        
        return imageFileName;


    }
}