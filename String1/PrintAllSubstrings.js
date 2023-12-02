function substringPrinter(s) {
    for (var sp = 0; sp < s.length; sp++) {
        for (var ep = sp; ep < s.length; ep++) {
            // Wo string print karni hai jo
            // sp se start ho and ep par khatam ho
            console.log(s.substring(sp, ep + 1));
        }
    }
}
substringPrinter("abcdef");
