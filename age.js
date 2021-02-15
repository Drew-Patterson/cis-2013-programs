var floatAge, floatMonths, floatFortnights, floatWeeks, floatDays;
floatAge = parseFloat(prompt("Please Enter Your Age"));
floatDays = parseFloat(floatAge*365.25).toFixed(2);
floatWeeks = parseFloat(floatDays/7).toFixed(2);
floatFortnights = parseFloat(floatDays/14).toFixed(2);
floatMonths = parseFloat(floatAge*12).toFixed(2);
alert("Age in Days = " + floatDays + " Days." + "\n" + "Age in Weeks = " + floatWeeks + " Weeks." + "\n" + "Age in Fortnights = " + floatFortnights + " Fortnights." + "\n" + "Age in Months = " + floatMonths + " Months.");