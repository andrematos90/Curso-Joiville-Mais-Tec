package src.model;

public class Cao extends Animal {
    private String porte;
    private boolean necessitaPasseio;

    public Cao(String id, String nome, int idade, String condicaoSaude, String temperamento, String porte, boolean necessitaPasseio) {
        super(id, nome, "Cão", idade, condicaoSaude, temperamento);
        this.porte = porte;
        this.necessitaPasseio = necessitaPasseio;
    }

    @Override
    public String gerarRelatorio() {
        return toString() + ", Porte: " + porte + ", Necessita Passeio: " + (necessitaPasseio ? "Sim" : "Não");
    }
}