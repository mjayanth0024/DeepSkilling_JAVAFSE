interface Document{
    void open(); 
}
class WordDocument implements Document{
    public void open(){
        System.out.println("WordDocument is open");
    }
}
class PdfDocument implements Document{
    public void open(){
        System.out.println("PDF document is open");
    }
}
class ExcelDocument implements Document{
    public void open(){
        System.out.println("Excel document is open");
    }
}
abstract class DocumentFactory{
   abstract Document createDocument();
}
class PdfDocumentFactory extends DocumentFactory{
    public Document createDocument(){
       return new PdfDocument();
    }
}

class WordDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new WordDocument();
    }
}


class ExcelDocumentFactory extends DocumentFactory{
    public Document createDocument(){
      return new ExcelDocument();
    }
}
public class FactoryMethodPatternExample{
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}