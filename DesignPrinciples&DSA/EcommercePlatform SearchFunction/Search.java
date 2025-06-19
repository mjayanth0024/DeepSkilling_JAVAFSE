public class Search {
    public static Product linearSearch(Product[] products, String name){
        for(Product p:products){
            if(p.getProductName().equals(name))
                return p;
        }
        return null;
    }
    public static Product binarySearch(Product[] products, String name){
        int l=0,r= products.length;
        int m,cmp;
        while(l<=r){
            m = (l+r)/2;
            cmp = products[m].getProductName().compareTo(name);
            if(cmp == 0)
                return products[m];
            else if(cmp > 0){
                r = m-1;
            }
            else{
                l = m+1;
            }
        }
        return null;

    }
}
