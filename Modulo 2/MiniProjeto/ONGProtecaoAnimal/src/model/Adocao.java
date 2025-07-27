package src.model;

import java.util.Date;

public class Adocao {
    private Adotante adotante;
    private Animal animalAdotado;
    private Date data;
    private boolean termoAssinado;

    public Adocao(Adotante adotante, Animal animalAdotado, Date data) {
        this.adotante = adotante;
        this.animalAdotado = animalAdotado;
        this.data = data;
        this.termoAssinado = false;
    }

    public void assinarTermo() {
        this.termoAssinado = true;
        this.animalAdotado.setStatus("Adotado");
    }

    public boolean isTermoAssinado() {
        return termoAssinado;
    }

    @Override
    public String toString() {
        return "Adotante: " + adotante.gerarRelatorio() +
               "\nAnimal: " + animalAdotado.gerarRelatorio() +
               "\nData: " + data +
               "\nTermo Assinado: " + (termoAssinado ? "Sim" : "Não") + "\n";
    }
}