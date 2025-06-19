import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1,"Pen","Education"),
                new Product(2,"shorts","clothing"),
                new Product(3,"trousers","clothing"),
                new Product(4,"Analogwatches","lifestyle"),
                new Product(5,"smartwatch","electronics"),
                new Product(6,"smarttv","electronics"),
                new Product(7,"mobiles","electronics")
        };
        Arrays.sort(products, (p1, p2) -> p1.getProductName().compareTo(p2.getProductName()));
        Product found1 = Search.linearSearch(products, "mobiles");
        Product found2 = Search.binarySearch(products, "smarttv");

        System.out.println("Linear: " + (found1 != null ? found1.productName : "Not found"));
        System.out.println("Binary: " + (found2 != null ? found2.productName : "Not found"));
    }
}