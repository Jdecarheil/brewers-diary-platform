package controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.brewers_diary.brewers_diary.dto.LoginUserDto;


public class SignUpTest extends SignUpAbstractTest {
	@Test
	public void getProductsList() throws Exception {
	   String uri = "/auth/signup";
	   LoginUserDto user = new LoginUserDto();
	   user.setEmail("test@test.com");
	   user.setPassword("pass");
	   
	   String toJson = super.mapToJson(user);
	   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
			   .contentType(MediaType.APPLICATION_JSON_VALUE).content(toJson)).andReturn();
	   
	   int status = mvcResult.getResponse().getStatus();
	   assertEquals(201, status);
	   String content = mvcResult.getResponse().getContentAsString();
	   assertEquals(content, "Product is created successfully");
	}
}
