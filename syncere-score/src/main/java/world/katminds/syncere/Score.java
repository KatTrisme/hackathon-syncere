package world.katminds.syncere;

import score.Context;
import score.annotation.External;
import score.annotation.Payable;
import scorex.util.Base64;

public class Score {

    // -- Product Data --
    private String title;
    private String expDate;
    private boolean recalled;

    // -- Admin method --
    @External()
    public void setRecalled(boolean recalled) {
        this.recalled = recalled;
    }

    // -- Admin method --
    @External()
    public void addProduct(String title, String expDate, boolean recalled) {
        this.title = title;
        this.expDate = expDate;
        this.recalled = recalled;
    }

    // -- Admin method --
    @External(readonly = true)
    public String getLatestProduct() {
        return currentProduct();
    }



    public String currentProduct() {
        String jsonData = "{\"data\": {\n" +
                "  \"title\": " + "\"" + this.title + "\"" + ",\n" +
                "  \"date\": " + "\"" + this.expDate + "\"" + ",\n" +
                "  \"recalled\": "+ this.recalled + ",\n" +
                "  }\n" +
                "}";

        byte[] dataBytes = jsonData.getBytes();
        String encodedData = new String(Base64.getEncoder().encode(dataBytes));
        Context.println(encodedData);
        return encodedData;
    }

    @Payable
    public void fallback() {
        // just receive incoming funds
    }
}
