public class Forecaster {
    public static double forecast(double initial, double rate, int years) {
        if (years == 0) return initial;
        return forecast(initial, rate, years - 1) * (1 + rate);
    }

    public static double forecastMemo(double initial, double rate, int years, double[] memo) {
        if (years == 0) return initial;
        if (memo[years] != 0) return memo[years];
        memo[years] = forecastMemo(initial, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }
}