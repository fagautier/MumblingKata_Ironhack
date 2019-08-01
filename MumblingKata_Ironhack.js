function accum(s) {
    let str = "";
    for (let i = 0; s.length > i; i++) {
        if (i === 0) {
            str = s[i].toUpperCase();
        } else {
            str = str + "-" + s[i].toUpperCase();
            for (let j = 0; i > j; j++) {
                str = str + s[i].toLowerCase();
            }
        }
    }
    return str;
}
