package com.example.back_vbg.dto;

public record CarroDTO(Long cod,
                       String marca,
                       String modelo,
                       String placa,
                       int ano,
                       String cor,
                       float valor,
                       boolean sociedade) {
}
