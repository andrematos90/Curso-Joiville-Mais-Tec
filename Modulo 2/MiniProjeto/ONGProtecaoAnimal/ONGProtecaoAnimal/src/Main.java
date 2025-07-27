package src;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    private static final List<Adotante> adotantes = new ArrayList<>();
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int opcao;
        do {
            System.out.println("\n==== MENU PRINCIPAL ====");
            System.out.println("[1] Gestão de Adotantes");
            System.out.println("[0] Sair");
            System.out.print("Escolha uma opção: ");
            opcao = Integer.parseInt(scanner.nextLine());

            switch (opcao) {
                case 1:
                    menuAdotantes();
                    break;
                case 0:
                    System.out.println("Encerrando...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 0);
    }

    private static void menuAdotantes() {
        int opcao;
        do {
            System.out.println("\n-- Gestão de Adotantes --");
            System.out.println("[1] Adicionar Perfil Adotante");
            System.out.println("[2] Editar Perfil Adotante");
            System.out.println("[3] Desabilitar/Habilitar Adotante");
            System.out.println("[4] Listar Todos Adotantes");
            System.out.println("[5] Voltar ao menu Principal");
            System.out.print("Escolha uma opção: ");
            opcao = Integer.parseInt(scanner.nextLine());

            switch (opcao) {
                case 1:
                    adicionarAdotante();
                    break;
                case 2:
                    editarAdotante();
                    break;
                case 3:
                    alterarStatusAdotante();
                    break;
                case 4:
                    listarAdotantes();
                    break;
                case 5:
                    System.out.println("Voltando ao menu principal...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 5);
    }

    private static void adicionarAdotante() {
        System.out.print("Nome: ");
        String nome = scanner.nextLine();
        System.out.print("CPF: ");
        String cpf = scanner.nextLine();
        System.out.print("Endereço: ");
        String endereco = scanner.nextLine();
        System.out.print("Preferências: ");
        String preferencias = scanner.nextLine();

        adotantes.add(new Adotante(nome, cpf, endereco, preferencias));
        System.out.println("Adotante adicionado com sucesso!");
    }

    private static void editarAdotante() {
        System.out.print("Digite o CPF do adotante: ");
        String cpf = scanner.nextLine();
        for (Adotante a : adotantes) {
            if (a.getCpf().equals(cpf)) {
                System.out.print("Novo nome (" + a.getNome() + "): ");
                a.setNome(scanner.nextLine());
                System.out.print("Novo endereço: ");
                a.setEndereco(scanner.nextLine());
                System.out.print("Novas preferências: ");
                a.setPreferencias(scanner.nextLine());
                System.out.println("Adotante atualizado.");
                return;
            }
        }
        System.out.println("Adotante não encontrado.");
    }

    private static void alterarStatusAdotante() {
        System.out.print("Digite o CPF do adotante: ");
        String cpf = scanner.nextLine();
        for (Adotante a : adotantes) {
            if (a.getCpf().equals(cpf)) {
                a.setAtivo(!a.isAtivo());
                System.out.println("Status atualizado para: " + (a.isAtivo() ? "Ativo" : "Inativo"));
                return;
            }
        }
        System.out.println("Adotante não encontrado.");
    }

    private static void listarAdotantes() {
        if (adotantes.isEmpty()) {
            System.out.println("Nenhum adotante cadastrado.");
        } else {
            for (Adotante a : adotantes) {
                System.out.println("\n-------------------");
                a.exibirInfo();
            }
        }
    }
}