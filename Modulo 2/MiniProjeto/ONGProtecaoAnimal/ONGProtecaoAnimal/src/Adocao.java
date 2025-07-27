package src;

import java.util.Date;

public class Adocao {
    private Adotante adotante;
    private Animal animalAdotado;
    private Date data;
    private boolean termoAssinado;

    public Adocao(Adotante adotante, Animal animalAdotado, boolean termoAssinado) {
        this.adotante = adotante;
        this.animalAdotado = animalAdotado;
        this.termoAssinado = termoAssinado;
        this.data = new Date();

        if (termoAssinado && animalAdotado.getStatus().equals("Disponível")) {
            animalAdotado.setStatus("Adotado");
            adotante.registrarAdocao(animalAdotado);
        }
    }

    public void exibirComprovante() {
        System.out.println("=== COMPROVANTE DE ADOÇÃO ===");
        System.out.println("Adotante: " + adotante.getNome());
        System.out.println("Animal: " + animalAdotado.getNome());
        System.out.println("Data: " + data);
        System.out.println("Termo Assinado: " + termoAssinado);
        System.out.println("Status Atual: " + animalAdotado.getStatus());
    }
}