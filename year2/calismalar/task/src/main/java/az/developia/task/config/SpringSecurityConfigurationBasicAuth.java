package az.developia.task.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		 http
         .csrf().disable()
         .authorizeRequests()
         .antMatchers("/filedownload/**").permitAll()
         .antMatchers(HttpMethod.OPTIONS, "/**").permitAll().
         antMatchers(HttpMethod.POST, "/users").permitAll().
 		antMatchers(HttpMethod.GET, "/users/check/**").permitAll().
 		antMatchers(HttpMethod.GET, "/filedownload/files/**").permitAll().
 		antMatchers(HttpMethod.GET, "/products").permitAll().
 		antMatchers(HttpMethod.POST, "/products/find-partial-search").permitAll()
         .anyRequest().authenticated().and()
         .httpBasic();

	}

	@Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource);
            
    }
}