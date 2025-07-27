package src;

public abstract class Animal {
    protected String id;
    protected String nome;
    protected String especie;
    protected int idade;
    protected String condicaoSaude;
    protected String temperamento;
    protected String status;

    public Animal(String id, String nome, String especie, int idade, String condicaoSaude, String temperamento, String status) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.condicaoSaude = condicaoSaude;
        this.temperamento = temperamento;
        this.status = status;
    }

    public String getNome() {
        return nome;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public abstract void exibirInfo();
}