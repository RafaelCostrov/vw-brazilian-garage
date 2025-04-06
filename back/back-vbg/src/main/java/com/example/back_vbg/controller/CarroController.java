package com.example.back_vbg.controller;


import com.example.back_vbg.services.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CarroController {

    @Autowired
    private CarroService carroService;



}
