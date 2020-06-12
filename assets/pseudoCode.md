in browser, must generate a random password based on user-selected criteria. 


GIVEN I need a new, secure password...

WHEN I click the button to generate a password
    //onCLick of button... 
        first prompt: how many characters would you like your password to contain?

        -user enters then ok
        all confirms:
            confirm- click OK to confirm special characters
            
            ok.. click ok to include numeric characters

            ok.. click ok to confirm including lowercase characters 
            ok.. click ok to confirm including lowercase characters 

            then generates and displays on page





INIT length := user input from prompt

IF length IS BETWEEN 8 and 128
  THEN
    INIT useSpecial := CONFIRM special chars
    INIT useNums := CONFIRM numeric chars
    INIT useLower := CONFIRM lower case chars
    INIT useUpper := CONFIRM uppercase chars
  IF useSpecial OR useNums OR useLower OR useUpper
  THEN
    generate password containing the correct types and length
  END IF
ELSE
  ALERT password length error message
END IF