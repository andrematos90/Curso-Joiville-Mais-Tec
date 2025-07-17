package src;

public class Cao extends Animal {
    private String porte;
    private boolean necessitaPasseio;

    public Cao(String id, String nome, int idade, String condicaoSaude, String temperamento, String status, String porte, boolean necessitaPasseio) {
        super(id, nome, "Cão", idade, condicaoSaude, temperamento, status);
        this.porte = porte;
        this.necessitaPasseio = necessitaPasseio;
    }

    @Override
    public void exibirInfo() {
        System.out.println("Cão: " + nome + ", Idade: " + idade + ", Porte: " + porte + ", Necessita Passeio: " + necessitaPasseio);
    }
}