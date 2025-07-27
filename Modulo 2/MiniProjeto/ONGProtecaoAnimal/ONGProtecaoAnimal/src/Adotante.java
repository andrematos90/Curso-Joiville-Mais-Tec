package src;

import java.util.ArrayList;
import java.util.List;

public class Adotante extends Pessoa implements Validavel, Relatorio {
    private String preferencias;
    private List<Animal> animaisAdotados;
    private boolean ativo;

    public Adotante(String nome, String cpf, String endereco, String preferencias) {
        super(nome, cpf, endereco);
        this.preferencias = preferencias;
        this.animaisAdotados = new ArrayList<>();
        this.ativo = true;
    }

    public void registrarAdocao(Animal animal) {
        animaisAdotados.add(animal);
    }

    public void setPreferencias(String preferencias) {
        this.preferencias = preferencias;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public void exibirInfo() {
        System.out.println("Nome: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Endereço: " + endereco);
        System.out.println("Preferências: " + preferencias);
        System.out.println("Status: " + (ativo ? "Ativo" : "Inativo"));
        System.out.println("Animais adotados:");
        for (Animal a : animaisAdotados) {
            System.out.println("- " + a.getNome() + " (" + a.especie + ")");
        }
    }

    @Override
    public boolean validar() {
        return ativo;
    }

    @Override
    public void gerarRelatorio() {
        System.out.println("=== Relatório do Adotante ===");
        System.out.println("Nome: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Endereço: " + endereco);
        System.out.println("Preferências: " + preferencias);
        System.out.println("Status: " + (ativo ? "Ativo" : "Inativo"));
        System.out.println("Animais Adotados:");
        if (animaisAdotados.isEmpty()) {
            System.out.println("- Nenhum animal adotado.");
        } else {
            for (Animal a : animaisAdotados) {
                System.out.println("- " + a.getNome() + " (" + a.especie + ")");
            }
        }
    }
}