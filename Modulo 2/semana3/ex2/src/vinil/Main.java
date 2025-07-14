package vinil;

public class Main {
    public static void main(String[] args) {
        Genero rock = new Genero("Rock", "Gênero musical caracterizado por guitarras elétricas e bateria forte");
        Disco disco1 = new Disco("Back in Black", 1980, rock);
        Autor autor1 = new Autor("AC/DC", disco1);

        System.out.println(autor1.getInfo());
    }
}
