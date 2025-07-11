package vinil;

public class Autor {
    private String nome;
    private Disco disco;

    public Autor(String nome, Disco disco) {
        this.nome = nome;
        this.disco = disco;
    }

    public String getNome() {
        return nome;
    }

    public Disco getDisco() {
        return disco;
    }

    @Override
    public String toString() {
        return "Autor: " + nome + ", " + disco;
    }
}
