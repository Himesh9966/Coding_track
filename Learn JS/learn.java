public class learn {
    public static  void main(String[] args) {
        int atmpts = 0;
        int Maxatmpts = 3;
        boolean success = false;

        while (atmpts < Maxatmpts && !success) {
            boolean result = proccessPayment();

            if (result){
                success = true;
            } else {
                atmpts++;
            }
        }

        System.out.println("Payment successful: " + success);
    }

    private static boolean proccessPayment() {
        return false;
    }
}