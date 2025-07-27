package src.model;

import src.interfaceUtil.Validavel;
import src.interfaceUtil.Relatorio;

public abstract class Animal implements Validavel, Relatorio {
    protected String id;
    protected String nome;
    protected String especie;
    protected int idade;
    protected String condicaoSaude;
    protected String temperamento;
    protected String status;
    protected boolean habilitado;

    public Animal(String id, String nome, String especie, int idade, String condicaoSaude, String temperamento) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.condicaoSaude = condicaoSaude;
        this.temperamento = temperamento;
        this.status = "Disponível";
        this.habilitado = true;
    }

    public boolean isHabilitado() {
        return habilitado;
    }

    public void setHabilitado(boolean habilitado) {
        this.habilitado = habilitado;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean validar() {
        return habilitado && status.equals("Disponível");
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Nome: " + nome + ", Espécie: " + especie + ", Idade: " + idade +
               ", Saúde: " + condicaoSaude + ", Temperamento: " + temperamento + ", Status: " + status;
    }
}