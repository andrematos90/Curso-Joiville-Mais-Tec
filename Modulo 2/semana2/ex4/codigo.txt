import java.util.Scanner;

public class Ex3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = 0;

        // Estoque inicial
        String nomeTomate = "Tomate";
        double precoTomate = 5.99;
        int quantidadeTomate = 100;

        String nomeBatata = "Batata";
        double precoBatata = 3.49;
        int quantidadeBatata = 150;

        String nomeCebola = "Cebola";
        double precoCebola = 4.25;
        int quantidadeCebola = 80;

        while (opcao != 4) {
            System.out.println("\n===== MENU DO SISTEMA =====");
            System.out.println("[1] Venda");
            System.out.println("[2] Reposição");
            System.out.println("[3] Relatório");
            System.out.println("[4] Sair");
            System.out.print("Escolha uma opção: ");

            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.println("\n== VENDA ==");
                    System.out.println("Qual produto deseja vender?");
                    System.out.println("[1] " + nomeTomate);
                    System.out.println("[2] " + nomeBatata);
                    System.out.println("[3] " + nomeCebola);
                    System.out.print("Escolha o produto: ");
                    int produto = scanner.nextInt();

                    System.out.print("Informe a quantidade a vender: ");
                    int quantidadeVenda = scanner.nextInt();

                    if (produto == 1) {
                        if (quantidadeVenda <= quantidadeTomate) {
                            quantidadeTomate -= quantidadeVenda;
                            System.out.println("Venda realizada com sucesso! Estoque restante de " + nomeTomate + ": " + quantidadeTomate);
                        } else {
                            System.out.println("Erro: Estoque insuficiente de " + nomeTomate);
                        }
                    } else if (produto == 2) {
                        if (quantidadeVenda <= quantidadeBatata) {
                            quantidadeBatata -= quantidadeVenda;
                            System.out.println("Venda realizada com sucesso! Estoque restante de " + nomeBatata + ": " + quantidadeBatata);
                        } else {
                            System.out.println("Erro: Estoque insuficiente de " + nomeBatata);
                        }
                    } else if (produto == 3) {
                        if (quantidadeVenda <= quantidadeCebola) {
                            quantidadeCebola -= quantidadeVenda;
                            System.out.println("Venda realizada com sucesso! Estoque restante de " + nomeCebola + ": " + quantidadeCebola);
                        } else {
                            System.out.println("Erro: Estoque insuficiente de " + nomeCebola);
                        }
                    } else {
                        System.out.println("Produto inválido.");
                    }
                    break;

                case 2:
                    System.out.println("\n== REPOSIÇÃO ==");
                    System.out.println("Qual produto deseja repor?");
                    System.out.println("[1] " + nomeTomate);
                    System.out.println("[2] " + nomeBatata);
                    System.out.println("[3] " + nomeCebola);
                    System.out.print("Escolha o produto: ");
                    int produtoReposicao = scanner.nextInt();

                    System.out.print("Informe a quantidade a repor: ");
                    int quantidadeReposicao = scanner.nextInt();

                    if (produtoReposicao == 1) {
                        quantidadeTomate += quantidadeReposicao;
                        System.out.println("Reposição realizada com sucesso! Novo estoque de " + nomeTomate + ": " + quantidadeTomate);
                    } else if (produtoReposicao == 2) {
                        quantidadeBatata += quantidadeReposicao;
                        System.out.println("Reposição realizada com sucesso! Novo estoque de " + nomeBatata + ": " + quantidadeBatata);
                    } else if (produtoReposicao == 3) {
                        quantidadeCebola += quantidadeReposicao;
                        System.out.println("Reposição realizada com sucesso! Novo estoque de " + nomeCebola + ": " + quantidadeCebola);
                    } else {
                        System.out.println("Produto inválido.");
                    }
                    break;

                case 3:
                    System.out.println("\n== RELATÓRIO DE ESTOQUE ==");
                    System.out.println(nomeTomate + ": " + quantidadeTomate + " unidades - R$" + precoTomate);
                    System.out.println(nomeBatata + ": " + quantidadeBatata + " unidades - R$" + precoBatata);
                    System.out.println(nomeCebola + ": " + quantidadeCebola + " unidades - R$" + precoCebola);
                    break;

                case 4:
                    System.out.println("Saindo do sistema. Até logo!");
                    break;

                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }

        scanner.close();
    }
}
