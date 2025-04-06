package com.example.back_vbg;

import com.example.back_vbg.model.Carro;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackVbgApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(BackVbgApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Carro carro = new Carro();
		carro.setMarca("volkswagem");
		System.out.println(carro.getMarca());
	}
}
