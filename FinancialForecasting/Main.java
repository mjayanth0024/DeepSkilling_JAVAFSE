//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.10;
        int years = 5;

        double resultRecursive = Forecaster.forecast(initialValue, growthRate, years);
        double[] memo = new double[years + 1];
        double resultMemoized = Forecaster.forecastMemo(initialValue, growthRate, years, memo);

        System.out.println("Recursive forecast: " + resultRecursive);
        System.out.println("Memoized forecast: " + resultMemoized);
    }
}