package com.example.back_vbg.services;

import com.example.back_vbg.dto.CarroDTO;
import com.example.back_vbg.model.Carro;
import com.example.back_vbg.repositorio.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarroService {

    @Autowired
    private CarroRepository repository;

    private List<CarroDTO> converteDTO(List<Carro> carros) {
        return carros.stream()
                .map(c -> new CarroDTO(c.getCod(), c.getMarca(), c.getModelo(), c.getPlaca(), c.getAno(), c.getCor(), c.getValor(), c.isSociedade()))
                .collect(Collectors.toList());
    }

    public List<CarroDTO> obterTodosCarros() {
        return converteDTO(repository.findAll());
    }

}
