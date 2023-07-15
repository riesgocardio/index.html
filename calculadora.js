import java.util.Scanner;
 public class CalculadoraRiesgoCardiovascular {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
         System.out.print("Registro: ");
        String registro = scanner.nextLine();
         System.out.print("Edad (40-44, 45-49, 50-54, 55-59, 60-64, 65-69, 70+): ");
        String edad = scanner.nextLine();
         System.out.print("Género (Hombre/Mujer): ");
        String genero = scanner.nextLine();
         System.out.print("¿Padece diabetes? (Si/No): ");
        String diabetes = scanner.nextLine();
         System.out.print("¿Fuma? (Si/No): ");
        String fuma = scanner.nextLine();
         System.out.print("Altura (cm): ");
        int alturaCm = scanner.nextInt();
        double alturaMetros = alturaCm / 100.0;
         System.out.print("Peso (kg): ");
        double peso = scanner.nextDouble();
         System.out.print("Presión arterial sistólica (120, 140, 160, 180): ");
        int presion = scanner.nextInt();
         // Cálculo del índice de masa corporal (IMC)
        double imc = peso / (alturaMetros * alturaMetros);
         // Lógica para calcular el porcentaje de riesgo final
        double porcentajeRiesgo = 0.0;
        // Aquí puedes implementar la lógica para calcular el porcentaje de riesgo final
        // basado en las variables ingresadas por el usuario
         // Mostrar los resultados
        System.out.println("Registro: " + registro);
        System.out.println("Edad: " + edad);
        System.out.println("Género: " + genero);
        System.out.println("¿Padece diabetes?: " + diabetes);
        System.out.println("¿Fuma?: " + fuma);
        System.out.println("Altura: " + alturaCm + " cm");
        System.out.println("Peso: " + peso + " kg");
        System.out.println("Presión arterial sistólica: " + presion);
        System.out.println("Índice de masa corporal (IMC): " + imc);
        System.out.println("Porcentaje de riesgo final: " + porcentajeRiesgo + "%");
         scanner.close();
    }
}