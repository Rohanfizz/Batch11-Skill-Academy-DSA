function substringPrinter(s: string) {
    for (let sp = 0; sp < s.length; sp++) {
        for (let ep = sp; ep < s.length; ep++) {
            // Wo string print karni hai jo
            // sp se start ho and ep par khatam ho
            console.log( s.substring(sp,ep+1) );
        }
    }
}

substringPrinter("abcdef")