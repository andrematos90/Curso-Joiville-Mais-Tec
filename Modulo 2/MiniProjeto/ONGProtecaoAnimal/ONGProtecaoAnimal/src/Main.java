
package src;
public class Main {
    public static void main(String[] args) {
        Cao cao = new Cao("1", "Rex", 5, "Saudável", "Brincalhão", "Disponível", "Médio", true);
        Gato gato = new Gato("2", "Mimi", 3, "Recuperado", "Calmo", "Disponível", true);

        cao.exibirInfo();
        gato.exibirInfo();
    }
}
