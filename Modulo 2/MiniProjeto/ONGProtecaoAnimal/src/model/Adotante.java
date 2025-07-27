package src.model;

import src.interfaceUtil.Validavel;
import src.interfaceUtil.Relatorio;

public class Adotante implements Validavel, Relatorio {
    private String nome;
    private String cpf;
    private String endereco;
    private String preferencias;
    private boolean habilitado;

    public Adotante(String nome, String cpf, String endereco, String preferencias) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.preferencias = preferencias;
        this.habilitado = true;
    }

    public String getCpf() {
        return cpf;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void setPreferencias(String preferencias) {
        this.preferencias = preferencias;
    }

    public boolean isHabilitado() {
        return habilitado;
    }

    public void setHabilitado(boolean habilitado) {
        this.habilitado = habilitado;
    }

    @Override
    public boolean validar() {
        return habilitado;
    }

    @Override
    public String gerarRelatorio() {
        return "Nome: " + nome + ", CPF: " + cpf + ", Endereço: " + endereco + ", Preferências: " + preferencias;
    }

    @Override
    public String toString() {
        return gerarRelatorio();
    }
}