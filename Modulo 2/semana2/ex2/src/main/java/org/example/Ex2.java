import java.util.Scanner;

public class Ex2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = 0;

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
                    System.out.println("Você escolheu: Venda");
                    // Aqui futuramente entra a lógica de venda
                    break;
                case 2:
                    System.out.println("Você escolheu: Reposição");
                    // Aqui entra a lógica de repor produtos
                    break;
                case 3:
                    System.out.println("Você escolheu: Relatório");
                    // Aqui entrará a exibição dos produtos
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
