package src;

public abstract class Animal implements Validavel, Relatorio {
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

    @Override
    public boolean validar() {
        return "Disponível".equalsIgnoreCase(this.status);
    }

    @Override
    public void gerarRelatorio() {
        System.out.println("=== Relatório do Animal ===");
        System.out.println("ID: " + id);
        System.out.println("Nome: " + nome);
        System.out.println("Espécie: " + especie);
        System.out.println("Idade: " + idade);
        System.out.println("Condição de Saúde: " + condicaoSaude);
        System.out.println("Temperamento: " + temperamento);
        System.out.println("Status: " + status);
    }
}