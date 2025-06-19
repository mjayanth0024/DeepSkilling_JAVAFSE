public class Product {
    int productId;
    String productName;
    String category;
    public Product(int pi,String pn,String c){
        this.productId = pi;
        this.productName = pn;
        this.category = c;
    }
    public int getProductId(){
        return productId;
    }
    public String getProductName(){
        return productName;
    }
    public String getCategory(){
        return category;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
