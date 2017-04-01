function Call(context) {
    arguments.slice = [].slice;
    return this.apply(context, arguments.slice(1));
}

