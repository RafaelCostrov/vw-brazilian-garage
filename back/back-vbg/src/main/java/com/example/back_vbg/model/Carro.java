package com.example.back_vbg.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "carros")
public class Carro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod;
    @Column(nullable = false)
    private String marca;
    @Column(nullable = false)
    private String modelo;
    private String placa;
    @Column(nullable = false)
    private int ano;
    @Column(nullable = false)
    private String cor;
    @Column(nullable = false)
    private float valor;
    @Column(nullable = false)
    private boolean sociedade;

    public Carro(Long cod, String marca, String modelo, String placa, int ano, String cor, float valor, boolean sociedade) {
        this.cod = cod;
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.valor = valor;
        this.sociedade = sociedade;
    }

}
