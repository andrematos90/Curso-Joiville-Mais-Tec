package src.model;

public class Gato extends Animal {
    private boolean conviveComOutrosGatos;

    public Gato(String id, String nome, int idade, String condicaoSaude, String temperamento, boolean conviveComOutrosGatos) {
        super(id, nome, "Gato", idade, condicaoSaude, temperamento);
        this.conviveComOutrosGatos = conviveComOutrosGatos;
    }

    @Override
    public String gerarRelatorio() {
        return toString() + ", Convive com outros gatos: " + (conviveComOutrosGatos ? "Sim" : "Não");
    }
}