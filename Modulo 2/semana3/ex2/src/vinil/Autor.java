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

    public String getInfo() {
        return "Autor: " + nome + "\n" + disco.getInfo();
    }

    @Override
    public String toString() {
        return getInfo();
    }
}
