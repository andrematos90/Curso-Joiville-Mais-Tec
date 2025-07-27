package src.service;

import src.model.*;
import java.util.*;
import java.text.SimpleDateFormat;

public class GestaoSistema {
    private Scanner scanner = new Scanner(System.in);
    private List<Animal> animais = new ArrayList<>();
    private List<Adotante> adotantes = new ArrayList<>();
    private List<Adocao> adocoes = new ArrayList<>();

    public void menuPrincipal() {
        while (true) {
            System.out.println("\n[1] Gestão de Adotantes");
            System.out.println("[2] Gestão de Animais");
            System.out.println("[3] Gestão de Adoções");
            System.out.println("[4] Sair");
            String opcao = scanner.nextLine();

            switch (opcao) {
                case "1": menuAdotantes(); break;
                case "2": menuAnimais(); break;
                case "3": menuAdocoes(); break;
                case "4": return;
                default: System.out.println("Opção inválida.");
            }
        }
    }

    private void menuAdotantes() {
        while (true) {
            System.out.println("\n[1] Adicionar Perfil Adotante");
            System.out.println("[2] Edição de Perfil Adotante");
            System.out.println("[3] Desabilitar/Habilitar Adotante");
            System.out.println("[4] Listar Todos Adotantes");
            System.out.println("[5] Voltar ao menu Principal");
            String opcao = scanner.nextLine();

            switch (opcao) {
                case "1":
                    System.out.print("Nome: ");
                    String nome = scanner.nextLine();
                    System.out.print("CPF: ");
                    String cpf = scanner.nextLine();
                    System.out.print("Endereço: ");
                    String endereco = scanner.nextLine();
                    System.out.print("Preferências: ");
                    String preferencias = scanner.nextLine();
                    adotantes.add(new Adotante(nome, cpf, endereco, preferencias));
                    break;
                case "2":
                    System.out.print("Informe o CPF do adotante: ");
                    cpf = scanner.nextLine();
                    for (Adotante a : adotantes) {
                        if (a.getCpf().equals(cpf)) {
                            System.out.print("Novo endereço: ");
                            a.setEndereco(scanner.nextLine());
                            System.out.print("Novas preferências: ");
                            a.setPreferencias(scanner.nextLine());
                        }
                    }
                    break;
                case "3":
                    System.out.print("Informe o CPF do adotante: ");
                    cpf = scanner.nextLine();
                    for (Adotante a : adotantes) {
                        if (a.getCpf().equals(cpf)) {
                            a.setHabilitado(!a.isHabilitado());
                            System.out.println("Status alterado.");
                        }
                    }
                    break;
                case "4":
                    adotantes.forEach(a -> System.out.println(a.gerarRelatorio()));
                    break;
                case "5": return;
            }
        }
    }

    private void menuAnimais() {
        while (true) {
            System.out.println("\n[1] Adicionar Cachorro");
            System.out.println("[2] Adicionar Gato");
            System.out.println("[3] Remover Animal");
            System.out.println("[4] Desabilitar/Habilitar Animal");
            System.out.println("[5] Listar Todos Animais");
            System.out.println("[6] Voltar ao menu Principal");
            String opcao = scanner.nextLine();

            switch (opcao) {
                case "1":
                    System.out.print("ID: ");
                    String id = scanner.nextLine();
                    System.out.print("Nome: ");
                    String nome = scanner.nextLine();
                    System.out.print("Idade: ");
                    int idade = Integer.parseInt(scanner.nextLine());
                    System.out.print("Saúde: ");
                    String saude = scanner.nextLine();
                    System.out.print("Temperamento: ");
                    String temp = scanner.nextLine();
                    System.out.print("Porte: ");
                    String porte = scanner.nextLine();
                    System.out.print("Necessita Passeio (true/false): ");
                    boolean passeio = Boolean.parseBoolean(scanner.nextLine());
                    animais.add(new Cao(id, nome, idade, saude, temp, porte, passeio));
                    break;
                case "2":
                    System.out.print("ID: ");
                    id = scanner.nextLine();
                    System.out.print("Nome: ");
                    nome = scanner.nextLine();
                    System.out.print("Idade: ");
                    idade = Integer.parseInt(scanner.nextLine());
                    System.out.print("Saúde: ");
                    saude = scanner.nextLine();
                    System.out.print("Temperamento: ");
                    temp = scanner.nextLine();
                    System.out.print("Convive com outros gatos (true/false): ");
                    boolean convive = Boolean.parseBoolean(scanner.nextLine());
                    animais.add(new Gato(id, nome, idade, saude, temp, convive));
                    break;
                case "3":
                    System.out.print("ID do animal: ");
                    id = scanner.nextLine();
                    animais.removeIf(a -> a.toString().contains(id));
                    break;
                case "4":
                    System.out.print("ID do animal: ");
                    id = scanner.nextLine();
                    for (Animal a : animais) {
                        if (a.toString().contains(id)) {
                            a.setHabilitado(!a.isHabilitado());
                            System.out.println("Status alterado.");
                        }
                    }
                    break;
                case "5":
                    animais.forEach(a -> System.out.println(a.gerarRelatorio()));
                    break;
                case "6": return;
            }
        }
    }

    private void menuAdocoes() {
        while (true) {
            System.out.println("\n[1] Gerar Adoção");
            System.out.println("[2] Realizar Adoção");
            System.out.println("[3] Listar Adoções");
            System.out.println("[4] Voltar ao menu Principal");
            String opcao = scanner.nextLine();

            switch (opcao) {
                case "1":
                    System.out.print("CPF do adotante: ");
                    String cpf = scanner.nextLine();
                    System.out.print("ID do animal: ");
                    String id = scanner.nextLine();
                    Adotante adotante = adotantes.stream().filter(a -> a.getCpf().equals(cpf) && a.validar()).findFirst().orElse(null);
                    Animal animal = animais.stream().filter(a -> a.toString().contains(id) && a.validar()).findFirst().orElse(null);
                    if (adotante != null && animal != null) {
                        adocoes.add(new Adocao(adotante, animal, new Date()));
                        System.out.println("Adoção gerada.");
                    } else {
                        System.out.println("Adotante ou animal inválido.");
                    }
                    break;
                case "2":
                    adocoes.forEach(ad -> {
                        if (!ad.isTermoAssinado()) {
                            ad.assinarTermo();
                            System.out.println("Adoção realizada.");
                        }
                    });
                    break;
                case "3":
                    adocoes.forEach(a -> System.out.println(a.toString()));
                    break;
                case "4": return;
            }
        }
    }
}