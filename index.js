function merge(dst, ...sources) {
    for (src of sources) {
      for (let key in src) {
        //Check for Prototype Pollution
        if (key === "__proto__" || key === "constructor") continue;
        let s = src[key], d = dst[key]
        if (Object(s) == s && Object(d) === d) {
          dst[key] = merge(d, s)
          continue
        }
        dst[key] = src[key]
      }
    }
    return dst
}

module.exports = merge;
