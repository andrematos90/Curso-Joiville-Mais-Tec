package vinil;

public class Disco {
    private String titulo;
    private int anoLancamento;
    private Genero genero;

    public Disco(String titulo, int anoLancamento, Genero genero) {
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.genero = genero;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getAnoLancamento() {
        return anoLancamento;
    }

    public Genero getGenero() {
        return genero;
    }

    public String getInfo() {
        return "Título: " + titulo + "\nAno de Lançamento: " + anoLancamento + "\n" + genero.getInfo();
    }

    @Override
    public String toString() {
        return getInfo();
    }
}
