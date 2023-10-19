public class pangram {
    public static boolean isPangram(String input) {
        input = input.toLowerCase();
        
        // Create a boolean array to mark the presence of each letter in the alphabet.
        boolean[] alphabetPresent = new boolean[26]; // Assuming we're dealing with the English alphabet.
        
        // Iterate through the characters in the input string.
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                // Mark the presence of the character in the array.
                alphabetPresent[ch - 'a'] = true;
            }
        }
        
        // Check if all alphabet letters are present.
        for (boolean letterPresent : alphabetPresent) {
            if (!letterPresent) {
                return false;
            }
        }
        
        return true;
    }

    public static void main(String[] args) {
        String input = "fefgnajk ab cd fgergiogjoijtiyhnro mznxvbcxvhgfruwgqodfhvbogp";
        if (isPangram(input)) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    }
}

