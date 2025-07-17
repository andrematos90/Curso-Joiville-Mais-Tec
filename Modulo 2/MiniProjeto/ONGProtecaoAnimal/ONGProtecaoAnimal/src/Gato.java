package src;

public class Gato extends Animal {
    private boolean conviveComOutrosGatos;

    public Gato(String id, String nome, int idade, String condicaoSaude, String temperamento, String status, boolean conviveComOutrosGatos) {
        super(id, nome, "Gato", idade, condicaoSaude, temperamento, status);
        this.conviveComOutrosGatos = conviveComOutrosGatos;
    }

    @Override
    public void exibirInfo() {
        System.out.println("Gato: " + nome + ", Idade: " + idade + ", Convive com outros gatos: " + conviveComOutrosGatos);
    }
}