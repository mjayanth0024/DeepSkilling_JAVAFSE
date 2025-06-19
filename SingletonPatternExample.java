class Logger{
    private static Logger logger;
    private Logger(){}
    public static Logger getInstance(){
        if(logger == null){
            logger = new Logger();
        }
        return logger;
    }
    public void log(String msg){
        System.out.println(msg);
    }
    public static void main(String[] args){
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();
        l1.log("l1 instance log");
        l2.log("l2 instance log");
       if(l1 == l2){
         System.out.println("Same instance for both l1 and l2:");
       }
       else{
         System.out.println("Not same instance for both l1 and l2:");
       }
    }


}